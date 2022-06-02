import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { resolve: true },
  keepNames: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react'],
  format: ['cjs', 'esm'],
});
