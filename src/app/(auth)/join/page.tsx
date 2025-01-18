'use client';
import { User } from '@/features/auth/model/types';
import { auth, db } from '@/shared/api/firebase';
import { FirebaseError } from 'firebase/app';

import { doc, setDoc } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type JoinFormData = Omit<User, 'createdAt' | 'updatedAt'>;
export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<JoinFormData>({
    id: '',
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    intro: '',
    provider: 'google',
    goal: 0,
  });

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      router.push('/login');
      return;
    }

    setFormData({
      id: currentUser.email?.split('@')[0] || '', // 사용자가 직접 입력
      uid: currentUser.uid,
      email: currentUser.email || '',
      displayName: currentUser.displayName || '',
      photoURL: currentUser.photoURL || '/images/default-profile.jpg',
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

      await setDoc(doc(db, 'users', formData.id), userDoc);
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
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow"
        >
          {/* 프로필 */}
          <div className="flex justify-center">
            <Image
              src={formData.photoURL || '/images/default-profile.jpg'}
              width={200}
              height={200}
              alt="프로필 이미지"
              className="rounded-full"
            />
          </div>

          {/* 이메일 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          {/* id */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              아이디
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="사용할 아이디를 입력하세요"
            />
          </div>

          {/* 닉네임 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              닉네임
            </label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="닉네임을 입력하세요"
            />
          </div>

          {/* 자기소개 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              자기소개
            </label>
            <input
              type="text"
              name="intro"
              value={formData.intro}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="자기소개를 입력하세요"
            />
          </div>

          {/* 년 목표 권수 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              연간 독서 목표
            </label>
            <input
              type="number"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              min="0"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="목표 권수를 입력하세요"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`
              w-full py-2 px-4 border border-transparent rounded-md shadow-sm
              text-white font-medium
              ${
                isLoading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }
            `}
          >
            {isLoading ? '처리중...' : '회원가입'}
          </button>
        </form>
      </div>
    </div>
  );
}
