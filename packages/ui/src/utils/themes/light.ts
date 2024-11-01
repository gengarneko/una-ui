const lightTheme = {
  '.una-light': {
    '--base-hue': '266',
    '--white': 'oklch(100% 0 0)',

    '--gray-000': 'oklch(99.5% 0 var(--base-hue))',
    '--gray-100': 'oklch(99.24% 0.008 var(--base-hue))',
    '--gray-200': 'oklch(98.08% 0.008 var(--base-hue))',
    '--gray-300': 'oklch(95.94% 0.004 var(--base-hue))',
    '--gray-400': 'oklch(94.3% 0.005 var(--base-hue))',
    '--gray-500': 'oklch(91.83% 0.008 var(--base-hue))',
    '--gray-600': 'oklch(90.18% 0.009 var(--base-hue))',
    '--gray-700': 'oklch(87.68% 0.012 var(--base-hue))',
    '--gray-800': 'oklch(80.94% 0.019 var(--base-hue))',
    '--gray-900': 'oklch(62.57% 0.038 var(--base-hue))',
    '--gray-1000': 'oklch(50.13% 0.047 var(--base-hue))',
    '--gray-1100': 'oklch(40.47% 0.038 var(--base-hue))',
    '--gray-1200': 'oklch(19.83% 0.01 var(--base-hue))',

    '--blue-100': 'oklch(100% 0 var(--base-hue))',
    '--blue-200': 'oklch(98.91% 0.005 var(--base-hue))',
    '--blue-300': 'oklch(96.85% 0.013 var(--base-hue))',
    '--blue-400': 'oklch(93.66% 0.027 var(--base-hue))',
    '--blue-500': 'oklch(88.34% 0.052 var(--base-hue))',
    '--blue-600': 'oklch(82% 0.082 var(--base-hue))',
    '--blue-700': 'oklch(73.65% 0.124 var(--base-hue))',
    '--blue-800': 'oklch(64.6% 0.172 var(--base-hue))',
    '--blue-900': 'oklch(55.52% 0.223 var(--base-hue))',
    '--blue-1000': 'oklch(46.51% 0.225 var(--base-hue))',
    '--blue-1100': 'oklch(36.42% 0.168 var(--base-hue))',
    '--blue-1200': 'oklch(23.85% 0.101 var(--base-hue))',

    '--green-100': 'oklch(99.15% 0.012 170)',
    '--green-200': 'oklch(98.73% 0.017 170)',
    '--green-300': 'oklch(97.92% 0.028 170)',
    '--green-400': 'oklch(96.76% 0.046 170)',
    '--green-500': 'oklch(94.97% 0.073 170)',
    '--green-600': 'oklch(93.1% 0.102 170)',
    '--green-700': 'oklch(91.3% 0.134 170)',
    '--green-800': 'oklch(89.62% 0.167 170)',
    '--green-900': 'oklch(88.54% 0.19 170)',
    '--green-1000': 'oklch(78.76% 0.177 170)',
    '--green-1100': 'oklch(52.84% 0.117 170)',
    '--green-1200': 'oklch(26.65% 0.056 170)',

    '--red-100': 'oklch(98.89% 0.005 22)',
    '--red-200': 'oklch(97.93% 0.009 22)',
    '--red-300': 'oklch(95.73% 0.02 22)',
    '--red-400': 'oklch(92.67% 0.033 22)',
    '--red-500': 'oklch(87.55% 0.059 22)',
    '--red-600': 'oklch(81.57% 0.092 22)',
    '--red-700': 'oklch(74.19% 0.138 22)',
    '--red-800': 'oklch(67.08% 0.186 22)',
    '--red-900': 'oklch(56.25% 0.221 22)',
    '--red-1000': 'oklch(44.11% 0.171 22)',
    '--red-1100': 'oklch(28.99% 0.108 22)',
    '--red-1200': 'oklch(18.93% 0.066 22)',

    '--orange-100': 'oklch(98.05% 0.013 60)',
    '--orange-200': 'oklch(97.41% 0.017 60)',
    '--orange-300': 'oklch(96.13% 0.026 60)',
    '--orange-400': 'oklch(94.22% 0.039 60)',
    '--orange-500': 'oklch(91.12% 0.061 60)',
    '--orange-600': 'oklch(87.51% 0.088 60)',
    '--orange-700': 'oklch(83.5% 0.117 60)',
    '--orange-800': 'oklch(78.74% 0.151 60)',
    '--orange-900': 'oklch(74.12% 0.181 60)',
    '--orange-1000': 'oklch(63.71% 0.165 60)',
    '--orange-1100': 'oklch(54.63% 0.140 60)',
    '--orange-1200': 'oklch(31.24% 0.075 60)',

    '--pink-100': 'oklch(91.7% 0.052 352)',
    '--pink-200': 'oklch(90.69% 0.059 352)',
    '--pink-300': 'oklch(89.72% 0.06 352)',
    '--pink-400': 'oklch(86.75% 0.086 352)',
    '--pink-500': 'oklch(82.97% 0.114 352)',
    '--pink-600': 'oklch(77.72% 0.155 352)',
    '--pink-700': 'oklch(73.12% 0.194 352)',
    '--pink-800': 'oklch(68.84% 0.231 352)',
    '--pink-900': 'oklch(65.43% 0.257 352)',
    '--pink-1000': 'oklch(55.6% 0.24 352)',
    '--pink-1100': 'oklch(42.39% 0.195 352)',
    '--pink-1200': 'oklch(30.21% 0.138 352)',

    '--accent': 'var(--blue-900)',
    '--background': 'var(--gray-100)',
    '--header': 'oklch(from var(--gray-100) l c h / 40%)',
    '--emphasis': 'oklch(from var(--blue-900) l c h / 5%)',
    '--foreground': 'oklch( from var(--gray-200) l c h / 100%)',
    '--danger': 'var(--red-900)',
    '--danger-emphasis': 'oklch(from var(--red-700) l c h / 10%)',
    '--warning': 'var(--orange-900)',
    '--warning-emphasis': 'oklch(from var(--orange-900) l c h / 7%)',
    '--success': 'var(--green-1100)',
    '--success-emphasis': 'oklch(from var(--green-900) l c h / 10%)',
    '--text-primary': 'var(--gray-1200)',
    '--text-secondary': 'var(--gray-1100)',
    '--text-tertiary': 'var(--gray-1000)',
    '--border-color': 'var(--gray-400)',
    '--card-background': 'var(--gray-200)',
    '--input-active': 'var(--blue-900)',
    '--input-background': 'var(--gray-000)',
    '--input-disabled': 'var(--gray-300)',
    '--input-border': 'var(--gray-500)',
    '--input-focus': 'var(--blue-800)',
    '--shadow-color': 'var(--local-shadow-color, 223deg 5% 80%)',
    '--code-snippet-background': 'var(--gray-200)',
    '--token-comment': 'var(--gray-1000)',
    '--token-selector': 'var(--blue-900)',
    '--token-symbol': 'var(--blue-1100)',
    '--token-operator': 'var(--gray-1000)',
    '--token-keyword': 'var(--blue-1000)',
    '--token-function': 'var(--pink-1000)',
    '--token-punctuation': 'var(--blue-900)',

    '@supports not (color: rgb(from white r g b))': {
      '--header': 'oklch(99.24% 0.008 var(--base-hue) / 40%)',
      '--emphasis': 'oklch(64.6% 0.172 var(--base-hue) / 7%)',
      '--foreground': 'oklch(98.08% 0.008 var(--base-hue) / 100%)',

      '--danger-emphasis': 'oklch(91.3% 0.134 170 / 10%)',
      '--warning-emphasis': 'oklch(54.63% 0.140 60 / 10%)',
      '--success-emphasis': 'oklch(88.54% 0.19 170 / 10%)',
    },
  },
}

export default lightTheme
