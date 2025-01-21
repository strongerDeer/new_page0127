import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // useSearchParams, suspense 경계 필요
  return (
    <Suspense>
      <div>검색input 영역</div>
      {children}
    </Suspense>
  );
}
