import { useRouter } from 'next/navigation';
import { useGoogleAuth } from './useGoogleAuth';
import { renderHook } from '@testing-library/react';
import { signInWithPopup } from 'firebase/auth';
import { act } from 'react';
import { checkUserExistsByUid } from '../api/auth';
import { ROUTES } from '@/shared/lib/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  signInWithPopup: jest.fn(),
}));

jest.mock('@/shared/api/firebase', () => ({
  auth: jest.fn(),
  googleProvider: jest.fn(),
}));

jest.mock('../api/auth', () => ({
  checkUserExistsByUid: jest.fn(),
}));

describe('useGoogleAuth', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  it('로그인 시작할 때 로딩 상태가 true로 설정된다', async () => {
    const { result } = renderHook(() => useGoogleAuth());

    (signInWithPopup as jest.Mock).mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({ user: { uid: 'test-uid', email: 'test@example.com' } });
          }, 0);
        }),
    );
    (checkUserExistsByUid as jest.Mock).mockResolvedValueOnce(true);

    await act(async () => {
      await result.current.handleLogin();
    });

    expect(result.current.isLoading).toBe(false);
  });

  it('회원가입 된 사용자가 로그인 성공시 홈으로 이동한다', async () => {
    const { result } = renderHook(() => useGoogleAuth());

    (signInWithPopup as jest.Mock).mockResolvedValueOnce({
      user: { uid: 'test-uid', email: 'test@example.com' },
    });
    (checkUserExistsByUid as jest.Mock).mockResolvedValueOnce(true);

    await act(async () => {
      await result.current.handleLogin();
    });

    expect(mockPush).toHaveBeenCalledWith(ROUTES.HOME);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('');
  });

  it('신규 사용자 로그인 성공 시 회원가입으로 이동한다', async () => {
    const { result } = renderHook(() => useGoogleAuth());

    (signInWithPopup as jest.Mock).mockResolvedValue({
      user: { uid: 'test-uid', email: 'test@example.com' },
    });
    (checkUserExistsByUid as jest.Mock).mockResolvedValue(false);

    await act(async () => {
      await result.current.handleLogin();
    });

    expect(mockPush).toHaveBeenCalledWith(ROUTES.JOIN);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('');
  });
});
