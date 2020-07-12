module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/unit/**/*.spec.ts'],
  clearMocks: true,
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'test/tsconfig.json',
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputName: './unit.junit.xml',
        outputDirectory: './test-reports',
        suiteNameTemplate: '{filename}',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
  ],
};
