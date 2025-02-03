import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { checkUserExistsByUid } from './auth';

// firebase 초기화 관련 모듈들도 모킹
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  limit: jest.fn(),
  getDocs: jest.fn(),
  getFirestore: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
}));

// firebase app 모킹
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
  getApps: jest.fn(),
}));

jest.mock('firebase/analytics', () => ({
  getAnalytics: jest.fn(),
  isSupported: jest.fn().mockResolvedValue(true),
}));

// firebase/firebase 모듈 전체 모킹
jest.mock('@/shared/api/firebase', () => ({
  db: jest.fn(),
  auth: jest.fn(),
  googleProvider: jest.fn(),
}));

describe('auth API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it('사용자가 존재하는 경우 true를 반환한다', async () => {
    (collection as jest.Mock).mockReturnValue('users-collection');
    (where as jest.Mock).mockReturnValue('where-clause');
    (limit as jest.Mock).mockReturnValue('limit-clause');
    (query as jest.Mock).mockReturnValue('query-ref');
    (getDocs as jest.Mock).mockResolvedValue({
      empty: false,
    });

    const exists = await checkUserExistsByUid('test-uid');
    expect(exists).toBe(true);
  });

  it('사용자가 존재하지 않는 경우 false를 반환한다', async () => {
    (collection as jest.Mock).mockReturnValue('users-collection');
    (where as jest.Mock).mockReturnValue('where-clause');
    (limit as jest.Mock).mockReturnValue('limit-clause');
    (query as jest.Mock).mockReturnValue('query-ref');
    (getDocs as jest.Mock).mockResolvedValue({
      empty: true,
    });

    const exists = await checkUserExistsByUid('abc');
    expect(exists).toBe(false);
  });

  it('에러 발생 시 에러를 throw 한다', async () => {
    const error = new Error('Firebase error');
    (getDocs as jest.Mock).mockRejectedValue(error);

    await expect(checkUserExistsByUid('test-uid')).rejects.toThrow(
      'Firebase error',
    );
    expect(console.error).toHaveBeenCalled(); // 선택적: 에러 로깅 확인
  });
});
