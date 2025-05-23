import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
import {} from 'vitest'
import { UserConfig } from 'vite'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      watch: false,
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./setupTests.ts'],
      exclude: [...configDefaults.exclude, 'e2e/**', '__tests__/**'],
      include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      update: true,
      outputFile: {
        markdown: './test-report.md',
        json: './test-report/test-report.json',
      },
      coverage: {
        all: true,
        reporter: ['text', 'text-summary', 'json-summary', 'json'],
        exclude: [
          'eslint.config.js',
          'postcss.config.js',
          'tailwind.config.js',
          'vite.config.ts',
          'vitest.config.ts',
          './dist/assets/*',
          './src/main.tsx',
          './src/vite-env.d.ts',
          './src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
          '__tests__/**',
          './build/**',
        ],
        reportOnFailure: true,
        reportsDirectory: './coverage',
        thresholds: {
          lines: 70,
          statements: 70,
          functions: 70,
          branches: 70,
        },
      },
    },
    plugins: [
      {
        name: 'stop-watcher',
        async configureServer(server) {
          await server.watcher.close()
        },
      },
    ],
    server: {
      watch: null,
    },
  }) as UserConfig & Promise<UserConfig>
)
