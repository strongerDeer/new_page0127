import { auth, db } from '@shared/api/firebase';
import { COLLECTIONS, NO_PROFILE } from '@shared/lib/constants';
import { FirebaseError } from 'firebase/app';

import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User } from './types';

export type JoinFormData = Omit<User, 'createdAt' | 'updatedAt'>;

export default function useJoin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<JoinFormData>({
    id: '',
    uid: '',
    email: '',
    displayName: '',
    photoURL: NO_PROFILE,
    background: NO_PROFILE,
    intro: '',
    provider: 'google',
    goal: 0,
  });

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      // router.push('/login');
      return;
    }

    setFormData({
      id: currentUser.email?.split('@')[0] || '', // 사용자가 직접 입력
      uid: currentUser.uid,
      email: currentUser.email || '',
      displayName: currentUser.displayName || '',
      photoURL: currentUser.photoURL || NO_PROFILE,
      intro: '',
      provider: 'google',
      goal: 0,
    });
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'goal' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 유효성 검사
    if (!formData.id.trim()) {
      setError('아이디를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const userDoc: User = {
        ...formData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await setDoc(doc(db, COLLECTIONS.USERS, formData.id), userDoc);
      // TODO: 개인페이지로 이동
      console.log('회원가입 되었습니다.');
    } catch (error: unknown) {
      console.error('Login error:', error);
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError('회원가입 중 오류가 발생했습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
  };
}
