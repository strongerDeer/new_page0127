import { db } from '@/shared/api/firebase';
import { COLLECTIONS } from '@/shared/lib/constants';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export const getUserIds = async () => {
  const snapshot = await getDocs(collection(db, COLLECTIONS.USERS));

  if (snapshot.empty) {
    throw new Error('users 컬렉션에서 데이터를 찾을 수 없습니다');
  }

  const data = snapshot.docs.map((doc) => ({
    userId: doc.id,
  }));
  return data;
};

export const getUser = async (userId: string) => {
  const snapshot = await getDoc(doc(db, COLLECTIONS.USERS, userId));

  if (snapshot.exists()) {
    throw new Error('해당 사용자를 찾을 수 없습니다');
  }

  const data = {
    userId: snapshot.id,
    ...snapshot.data(),
  };
  return data;
};
