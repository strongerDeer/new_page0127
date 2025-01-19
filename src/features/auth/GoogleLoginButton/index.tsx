'use client';
import { useGoogleAuth } from '../model/useGoogleAuth';
import { GoogleLoginButton as UIButton } from './ui';

export function GoogleLoginButton() {
  const { handleLogin, isLoading, error } = useGoogleAuth();

  return <UIButton onLogin={handleLogin} isLoading={isLoading} error={error} />;
}
