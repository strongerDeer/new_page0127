import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      // { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      // { protocol: 'https', hostname: 'image.aladin.co.kr' },
      // { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      // { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
};

export default withVanillaExtract(nextConfig);
