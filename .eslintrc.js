/* eslint-env node */

require('@uniswap/eslint-config/load')

module.exports = {
  root: true,
  extends: '@uniswap/eslint-config/react',
  rules: {
    'prettier/prettier': 0,
  },
};