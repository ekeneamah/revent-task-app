module.exports = {
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
    coverageReporters: ['text', 'lcov'],
    transform: {
        '^.+\\.js$': 'babel-jest',
      },
  };
  