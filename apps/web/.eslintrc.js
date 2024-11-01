import { configs, defineConfig } from '@repo/eslint'

export default defineConfig(
  ...configs.base,
  ...configs.next,
  ...configs.playwright,
)
