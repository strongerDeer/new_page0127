'use client';

import { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/shared/api/firebase';
import { COLLECTIONS } from '@/shared/lib/constants';

export default function useCheckUserId() {
  const [isChecking, setIsChecking] = useState(false);

  const checkUserId = async (userId: string) => {
    setIsChecking(true);
    try {
      const q = query(
        collection(db, COLLECTIONS.USERS),
        where('userId', '==', userId),
      );
      const snapshot = await getDocs(q);
      return snapshot.empty;
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log('아이디 체크 오류', error);
        return false;
      }
    } finally {
      setIsChecking(false);
    }
  };
  return { checkUserId, isChecking };
}
