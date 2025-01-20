import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: '.',
});
const config: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['node_modules', '<rootDir>'],

  moduleNameMapper: {
    // ./src 패턴 매핑 추가
    '\\./src/testing-library/(.*)':
      '<rootDir>/node_modules/@testing-library/$1',

    // testing-library 상대 경로 매핑
    '\\.\\./\\.\\./\\.\\./testing-library/(.*)':
      '<rootDir>/node_modules/@testing-library/$1',
    '\\.\\./\\.\\./testing-library/(.*)':
      '<rootDir>/node_modules/@testing-library/$1',
    '\\.\\./testing-library/(.*)': '<rootDir>/node_modules/@testing-library/$1',

    // vanilla-extract 상대 경로 매핑
    '\\.\\./\\.\\./\\.\\./vanilla-extract/(.*)':
      '<rootDir>/node_modules/@vanilla-extract/$1',
    '\\.\\./\\.\\./vanilla-extract/(.*)':
      '<rootDir>/node_modules/@vanilla-extract/$1',
    '\\.\\./vanilla-extract/(.*)': '<rootDir>/node_modules/@vanilla-extract/$1',

    // 기존 매핑
    '^@testing-library/(.*)$': '<rootDir>/node_modules/@testing-library/$1',
    '^@vanilla-extract/(.*)$': '<rootDir>/node_modules/@vanilla-extract/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(config);
