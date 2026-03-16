module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: ['**/*.js', '!**/node_modules/**', '!**/coverage/**', '!**/assets/**'],
  coverageDirectory: 'coverage',
  clearMocks: true,
};
