const buildSpacingSize = (list: number[]) => Object.fromEntries(list.map((e) => [e, `${e}px`]));

const spacing = buildSpacingSize([
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32,
  36, 40, 44, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176,
  192, 208, 224, 240, 256, 288, 320, 384,
]);

const twindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing,
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        '8xl': '96px',
        '9xl': '128px',
      },
      // 这个看需求添加
      colors: {
        primary: 'var(--color-primary, #0cc5ae)',
      },
    },
  },
};

export default twindConfig;
