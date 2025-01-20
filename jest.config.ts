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
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '\\.css\\.ts$': '<rootDir>/test/styleMock.js',
    '.*testing-library/(.*)$': '<rootDir>/node_modules/@testing-library/$1',
    '.*vanilla-extract/(.*)$': '<rootDir>/node_modules/@vanilla-extract/$1',
  },
};

export default createJestConfig(config);
