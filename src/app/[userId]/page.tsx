import { notFound } from 'next/navigation';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/shared/api/firebase';
import { COLLECTIONS } from '@/shared/lib/constants';

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const snapshot = await getDocs(collection(db, COLLECTIONS.USERS));

    if (snapshot.empty) {
      console.warn('users 컬렉션에서 데이터를 찾을 수 없습니다');
      return [];
    }

    const data = snapshot.docs.map((doc) => ({
      userId: doc.id,
    }));
    return data;
  } catch (error) {
    console.error('사용자 데이터를 가져오는데 실패함:', error);
    return [];
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  if (!userId) notFound();

  return <div>{userId}</div>;
}
