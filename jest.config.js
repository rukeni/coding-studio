module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.(m)?(t|j)sx?$': ['@swc/jest'],
  },
  clearMocks: true,
};
