export const NO_PROFILE = '/images/no-profile.png';
export const STORAGE_DOWNLOAD_URL_STR =
  'https://firebasestorage.googleapis.com';

export const SITE = {
  title: 'page 0127.',
  description: '나만의 온라인 서재',
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL || 'https://page0127-three.vercel.app',
  ogImage: 'images/opengraph-image.jpg',
};

export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '/404',

  LOGIN: '/login',
  JOIN: '/join',

  //book
  BOOK: '/book',
  BOOK_SEARCH: '/search',
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

export const COLLECTIONS = {
  USERS: 'users',
  TERMS: 'terms',
};
