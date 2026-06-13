import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/*.ts'],
  deps: { skipNodeModulesBundle: true },
  minify: true,
  exports: true,
  publint: true,
  attw: true,
});
