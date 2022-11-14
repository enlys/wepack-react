// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  // extends的优先级也是从后往前的
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'generator-star-spacing': 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-debugger': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    // 引号必须是单引号
    'quotes': [
      2,
      'single'
    ],
  },
};
