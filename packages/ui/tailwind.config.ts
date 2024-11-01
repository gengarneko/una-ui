import type { Config } from 'tailwindcss'

import { gengrnekoTailwindPreset } from '@una/tailwind'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  presets: [gengrnekoTailwindPreset],
}

export default config
