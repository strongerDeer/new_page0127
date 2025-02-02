import { auth, db } from '@/shared/api/firebase';
import { COLLECTIONS, NO_PROFILE, ROUTES } from '@/lib/constants';
import { FirebaseError } from 'firebase/app';

import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { JoinFormData } from './types';
import { User } from '../model/types';
import { joinFormSchema } from './joinFormSchema';
import { ZodError } from 'zod';
import { deleteUser } from 'firebase/auth';

export default function useJoinForm() {
  const router = useRouter();
  const authUser = auth.currentUser;
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<JoinFormData>({
    userId: '',
    uid: '',
    photoURL: '',
    email: '',
    provider: 'google',
    displayName: '',
    sex: null,
    birth: '',
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
    });
  }, [router]);

  const validateForm = () => {
    try {
      joinFormSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const formError: Record<string, string> = {};

        error.errors.forEach((err) => {
          const field = err.path[0];
          formError[field] = error.message;
        });
        setErrors(formError);
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const userDoc: User = {
        ...formData,
        background: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        bio: '',
        goal: 12,
      };

      await setDoc(doc(db, COLLECTIONS.USERS, formData.userId), userDoc);
      router.replace(ROUTES.HOME);
      console.log('회원가입 되었습니다.');
    } catch (error: unknown) {
      console.error('Login error:', error);
      if (error instanceof FirebaseError) {
        setErrors((prev) => ({ ...prev, submit: error.message }));
      } else {
        setErrors((prev) => ({
          ...prev,
          submit: '회원가입 중 오류가 발생했습니다.',
        }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const cancelJoin = async () => {
    try {
      if (authUser) {
        await deleteUser(authUser);
        router.replace(ROUTES.LOGIN);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleRadioChange,
    handleProfileImgChange,
    isLoading,
    errors,
    cancelJoin,
  };
}
