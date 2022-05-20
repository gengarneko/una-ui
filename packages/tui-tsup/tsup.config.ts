import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: false,
  dts: true,
  clean: true,
  external: ["react", "react-dom"],
});
