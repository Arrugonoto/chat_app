module.exports = {
   env: {
      node: true,
      commonjs: true,
      es2021: true,
   },
   extends: ['eslint:recommended', 'prettier'],
   overrides: [],
   parserOptions: {
      ecmaVersion: 'latest',
   },
   rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
   },
};
