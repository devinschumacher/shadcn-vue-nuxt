// eslint.config.mjs
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'; // for Nuxt projects

export default withNuxt({
  rules: {
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/no-setup-props-destructure': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'off',
    'prefer-const': 'warn',
  },
});
