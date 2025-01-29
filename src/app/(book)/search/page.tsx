import { db } from '@/shared/api/firebase';
import { COLLECTIONS } from '@/shared/lib/constants';
import Search from '@/shared/ui/Search/Search';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function getSearchBooks(keyword: string) {
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
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  const data = await getSearchBooks(q);

  return (
    <div>
      <Search query={q || ''} />
      {q &&
        (data.length > 0 ? (
          <p>도서 데이터는 {data.length}</p>
        ) : (
          <p>해당 도서를 찾을 수 없습니다.</p>
        ))}
    </div>
  );
}
