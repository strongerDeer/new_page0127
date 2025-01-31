'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '@/shared/api/queryClient';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={client}>
      <Header />
      <div className="contents">{children}</div>
      <Footer />
    </QueryClientProvider>
  );
}
