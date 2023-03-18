module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
