import type { Metadata } from 'next';

import '@/styles/globals.scss';

import { pretendard } from '@/shared/font';
import { SITE } from '@/lib/constants';
import GlobalLayout from '@/shared/ui/Layout/GlobalLayout';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: SITE.title,
  description: SITE.description,
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    title: SITE.title,
    description: SITE.description,
    locale: 'ko_KR',
    siteName: SITE.title,
    images: [SITE.ogImage],
  },
  twitter: {
    card: 'summary',
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={pretendard.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
