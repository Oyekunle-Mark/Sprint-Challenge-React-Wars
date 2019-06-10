module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'jsx-quotes': 0,
    'camelcase': 0,
    'react/jsx-one-expression-per-line': 0,
    'quotes': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/button-has-type': 0
  },
};
