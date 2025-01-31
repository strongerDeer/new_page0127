'use client';

import { useQuery } from '@tanstack/react-query';
import { getUser } from './getUser';
import { notFound } from 'next/navigation';

export default function Profile({ userId }: { userId: string }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    if (
      error instanceof Error &&
      error.message === '해당 사용자를 찾을 수 없습니다'
    ) {
      notFound();
    }
    return (
      <div>
        에러가 발생했습니다:{' '}
        {error instanceof Error ? error.message : '알 수 없는 에러'}
      </div>
    );
  }

  console.log(data);
  return <div>Profile</div>;
}
