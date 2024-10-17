import react from '@vitejs/plugin-react';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      update: true,
      outputFile: {
        markdown: './test-report.md',
        json: './test-report/test-report.json',
      },
      coverage: {
        all: true,
        reporter: ['text', 'text-summary', 'json-summary', 'json'],
        reportOnFailure: true,
        reportsDirectory: './coverage',
        thresholds: {
          lines: 0,
          statements: 0,
          functions: 0,
          branches: 0,
        },
      },
    },
  }),
);
