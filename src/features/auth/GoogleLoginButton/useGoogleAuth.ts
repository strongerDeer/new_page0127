'use client';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/shared/api/firebase';
import { checkUserExistsByUid } from '../api/auth';

import { FirebaseError } from 'firebase/app';
import { useAuthStore } from '../model/store';
import { ROUTES } from '@/shared/lib/constants';

export function useGoogleAuth() {
  const router = useRouter();
  const { isLoading, error, setLoading, setError } = useAuthStore();

  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      const { user } = await signInWithPopup(auth, googleProvider);
      const { uid, email } = user;

      if (!email) {
        throw new Error('이메일 정보를 가져올 수 없습니다.');
      }

      const userExists = await checkUserExistsByUid(uid);

      if (userExists) {
        router.push(ROUTES.HOME);
      } else {
        router.push(ROUTES.JOIN);
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError('로그인 중 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  }, [router, setLoading, setError]);

  return {
    handleLogin,
    isLoading,
    error,
  };
}
