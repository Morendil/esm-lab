import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: Config = {
  setupFiles: [],
  setupFilesAfterEnv: [],
  collectCoverageFrom: ['*.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePaths: [compilerOptions.baseUrl],
  rootDir: '.',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'node',
  preset: 'ts-jest',
};

export default config;
