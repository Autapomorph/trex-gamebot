module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'consistent-return': 'off',
    'no-use-before-define': ['error', { functions: false }],
  },
};
