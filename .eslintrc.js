module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': 1,
    'operator-linebreak': 1,
    'arrow-parens': 1,
    'comma-spacing': 1,
    'quotes': 1,
    'padded-blocks': 1,
    'react/jsx-tag-spacing': 1
  },
};
