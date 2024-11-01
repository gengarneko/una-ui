import { configs, defineConfig } from '@repo/eslint'

export default defineConfig(
  {
    ignores: ['apps', 'packages'],
  },

  ...configs.base,
)
