import { configs, defineConfig } from '@una/eslint'

export default defineConfig(
  ...configs.base,
  ...configs.next,
  ...configs.playwright,
)
