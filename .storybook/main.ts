import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    // config가 null이 아님을 확인
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@styles': path.resolve(__dirname, '../src/shared/styles'),
        '@': path.resolve(__dirname, '../src'),
      };
    } else {
      // resolve 객체가 없는 경우 생성
      config.resolve = {
        alias: {
          '@styles': path.resolve(__dirname, '../src/shared/styles'),
          '@': path.resolve(__dirname, '../src'),
        },
        fallback: {},
      };
    }
    return config;
  },
};
export default config;
