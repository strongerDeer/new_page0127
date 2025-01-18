'use client';

import { signInWithPopup } from '@firebase/auth';

import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { checkUserExistsByUid } from '../api/auth';
import { useRouter } from 'next/navigation';
import { auth, googleProvider } from '@/shared/api/firebase';
import { FirebaseError } from 'firebase/app';

export default function GoogleLoginButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError('');

      const { user } = await signInWithPopup(auth, googleProvider);
      const { uid, email } = user;

      if (!email) {
        throw new Error('이메일 정보를 가져올 수 없습니다.');
      }
      // 등록된 유저 확인
      const userExists = await checkUserExistsByUid(uid);

      console.log('dddd');
      if (userExists) {
        // 가입유저
        // 메인/이전 페이지로 이동
        console.log('로그인되었습니다.');
      } else {
        // 신규사용자
        router.push(`/join`);
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError('로그인 중 오류가 발생했습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <button onClick={handleLogin} disabled={isLoading}>
        <FaGoogle />
        Google 계정으로 로그인
      </button>
      {error}
    </>
  );
}
