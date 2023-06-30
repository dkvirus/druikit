import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'druikit',
  },
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
});
