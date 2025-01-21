import Button from '@/shared/ui/Button/Button';
interface GoogleLoginButtonProps {
  onLogin: () => Promise<void>;
  isLoading: boolean;
  error?: string;
}

export function GoogleLoginButton({
  onLogin,
  isLoading,
  error,
}: GoogleLoginButtonProps) {
  return (
    <>
      <Button
        leftIcon="google"
        label={isLoading ? '로그인 중...' : 'Google 계정으로 시작하기'}
        onClick={onLogin}
        disabled={isLoading}
        full
      />

      {error && <p>{error}</p>}
    </>
  );
}
