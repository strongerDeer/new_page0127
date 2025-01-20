import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // useSearchParams, suspense 경계 필요
  return <Suspense>{children}</Suspense>;
}
