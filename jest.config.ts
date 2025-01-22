import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', 'jest-extended/all'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/lib/(.*)$': '<rootDir>/src/shared/lib/$1',
    '^@/styles/(.*)$': '<rootDir>/src/shared/styles/$1',
  },
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
};

export default createJestConfig(config);
