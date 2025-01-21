'use client';
import { ROUTES } from '@shared/lib/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search({ query }: { query?: string }) {
  const router = useRouter();
  const [search, setSearch] = useState(query || '');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || query === search) return;
    router.push(`${ROUTES.BOOK_SEARCH}?q=${search}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChangeSearch}
        type="search"
        value={search}
        placeholder="검색어를 입력하세요"
      />
      <button type="submit">검색</button>
    </form>
  );
}
