import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/*.ts'],
  deps: { skipNodeModulesBundle: true },
  dts: true,
  exports: true,
  publint: true,
  attw: {
    profile: 'esm-only',
  },
});
