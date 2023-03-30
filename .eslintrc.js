module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'max-lines': ['error', 120],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
