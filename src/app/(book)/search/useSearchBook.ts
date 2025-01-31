'use client';
import { db } from '@/shared/api/firebase';
import { COLLECTIONS } from '@/shared/lib/constants';
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';

async function getSearchBooks(keyword: string) {
  if (!keyword) return [];
  try {
    const snapshot = await getDocs(
      query(
        collection(db, COLLECTIONS.BOOKS),
        where('title', '>=', keyword),
        where('title', '<=', keyword + '\uf8ff'),
      ),
    );

    if (snapshot.empty) {
      return [];
    }
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error('책 데이터를 가져오는데 실패함:', error);
    return [];
  }
}

export default function useSearchBook({ keyword }: { keyword: string }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => getSearchBooks(keyword),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled: !!keyword,
  });

  return { data, isLoading, isError, error };
}
