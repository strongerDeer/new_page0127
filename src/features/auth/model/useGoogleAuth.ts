'use client';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/shared/api/firebase';
import { checkUserExistsByUid } from '../api/auth';
import { useAuthStore } from './store';
import { FirebaseError } from 'firebase/app';

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
        console.log('로그인되었습니다.');
      } else {
        router.push('/join');
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
