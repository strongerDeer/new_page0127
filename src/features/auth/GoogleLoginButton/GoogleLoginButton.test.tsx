import { fireEvent, render, screen } from '@testing-library/react';
import { useGoogleAuth } from './useGoogleAuth';
import { GoogleLoginButton } from '.';

jest.mock('./useGoogleAuth');
jest.mock('@/shared/ui/Button', () => ({
  __esModule: true,
  default: ({
    label,
    onClick,
    disabled,
  }: {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
  }) => (
    <button onClick={onClick} disabled={disabled} type="button">
      {label}
    </button>
  ),
}));
describe('GoogleLoginButton', () => {
  const mockHandleLogin = jest.fn();

  beforeEach(() => {
    (useGoogleAuth as jest.Mock).mockReturnValue({
      handleLogin: mockHandleLogin,
      isLoading: false,
      error: null,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('구글 로그인 버튼이 렌더링 된다', () => {
    render(<GoogleLoginButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Google 계정으로 시작하기');
  });

  it('로딩 중일 때 로딩 상태를 표시하고 버튼이 비활성화된다', () => {
    (useGoogleAuth as jest.Mock).mockReturnValue({
      handleLogin: mockHandleLogin,
      isLoading: true,
      error: null,
    });

    render(<GoogleLoginButton />);
    const button = screen.getByRole('button');

    // 로딩 텍스트 확인
    expect(button).toHaveTextContent('로그인 중...');
    // 버튼 비활성화 확인
    expect(button).toBeDisabled();
    // 비활성화된 상태에서 클릭이 동작하지 않는지 확인
    fireEvent.click(button);
    expect(mockHandleLogin).not.toHaveBeenCalled();
  });

  it('에러가 있을 때 에러 메시지를 표시한다', () => {
    const errorMessage = '로그인 중 오류가 발생했습니다';
    (useGoogleAuth as jest.Mock).mockReturnValue({
      handleLogin: mockHandleLogin,
      isLoading: false,
      error: errorMessage,
    });

    render(<GoogleLoginButton />);
    // 에러 메시지가 화면에 표시되는지 확인
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('클릭 시 로그인 함수가 호출된다', () => {
    render(<GoogleLoginButton />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHandleLogin).toHaveBeenCalledTimes(1);
  });
});
