import Search from '@/shared/ui/Search/Search';
import BookList from './BookList';
import { Suspense } from 'react';

// Dynamic Page: searchParams 사용
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      <Search query={q || ''} />
      <Suspense key={q || ''} fallback={<>loading...</>}>
        <BookList keyword={q} />
      </Suspense>
    </div>
  );
}
