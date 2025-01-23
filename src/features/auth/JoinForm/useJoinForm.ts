import { auth, db } from '@/shared/api/firebase';
import { COLLECTIONS, NO_PROFILE } from '@/lib/constants';
import { FirebaseError } from 'firebase/app';

import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { JoinFormData } from './types';
import { User } from '../model/types';

export default function useJoinForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<JoinFormData>({
    userId: '',
    uid: '',
    photoURL: '',
    email: '',
    provider: 'google',
    displayName: '',
    sex: null,
    birth: '',
    bio: '',
    goal: 0,
  });

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      router.push('/login');
      return;
    }

    setFormData({
      uid: currentUser.uid,
      email: currentUser.email || '',
      provider: 'google',
      photoURL: currentUser.photoURL || NO_PROFILE,
      userId: currentUser.email?.split('@')[0] || '', // 사용자가 직접 입력
      sex: null,
      birth: '',
      displayName:
        currentUser.displayName || currentUser.email?.split('@')[0] || '',
      bio: '',
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

  const handleProfileImgChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      photoURL: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      sex: value as 'male' | 'female',
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 유효성 검사
    if (!formData.userId.trim()) {
      setError('아이디를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const userDoc: User = {
        ...formData,
        background: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await setDoc(doc(db, COLLECTIONS.USERS, formData.userId), userDoc);
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
    handleRadioChange,
    handleProfileImgChange,

    isLoading,
    error,
  };
}
