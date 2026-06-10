import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/*.ts'],
  deps: { skipNodeModulesBundle: true },
  minify: true,
  exports: { legacy: true },
  publint: true,
  attw: true,
});
