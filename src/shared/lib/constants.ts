export const SITE = {
  title: 'page 0127.',
  description: '나만의 온라인 서재',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://page0127.vercel.app',
  ogImage: '/images/og-image.jpg',
};

export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '/404',

  LOGIN: '/login',
  JOIN: '/join',

  //book
  BOOK: '/book',
  BOOK_SEARCH: '/book/search',
  MY_BOOK: '/my-books',
  FOLLOW: '/follow',

  // my
  BOOK_CREATE: '/book/create',

  EDIT_PROFILE: '/edit-profile',
  EDIT_GOAL: '/edit-goal',

  // admin
  ADMIN: '/admin',
  ADMIN_BANNER: '/admin/banner',
} as const;
