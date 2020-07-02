module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'consistent-return': 'off',
    'no-use-before-define': ['error', { functions: false }],
  },
};
