module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'max-lines': ['error', 120],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
