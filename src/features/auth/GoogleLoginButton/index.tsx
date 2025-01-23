'use client';
import { GoogleLoginButton as UIButton } from './ui';
import { useGoogleAuth } from './useGoogleAuth';

export function GoogleLoginButton() {
  const { handleLogin, isLoading, error } = useGoogleAuth();

  return <UIButton onLogin={handleLogin} isLoading={isLoading} error={error} />;
}
