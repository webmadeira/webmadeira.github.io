module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      0,
      'never',
      ['start-case', 'sentence-case', 'pascal-case', 'upper-case'],
    ],
  },
}
