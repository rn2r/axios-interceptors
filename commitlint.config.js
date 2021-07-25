module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-length': [2, 'always', 150],
    'body-max-line-length': [2, 'always', 150],
    'body-min-length': [2, 'always', 5],
    'footer-leading-blank': [2, 'always'],
    'footer-max-length': [2, 'always', 150],
    'footer-max-line-length': [2, 'always', 150],
    'footer-min-length': [2, 'always', 0],
    'subject-case': [0, 'always', 'camel-case'],
    'subject-empty': [2, 'never', '.'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 150],
    'subject-min-length': [2, 'always', 10],
    'scope-enum': [2, 'always', []],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'scope-max-length': [2, 'always', 50],
    'scope-min-length': [2, 'always', 3],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'chore',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'test',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
};
