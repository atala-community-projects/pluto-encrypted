/// <reference types="vitest" />
import { defineConfig } from 'vite'

const isCI = process.env.CI === "true";

export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: { format: { comments: 'all' } },
  },
  test: {
    reporters: ['verbose'], // or 'verbose'
    coverage: {
      provider: 'istanbul',
      reporter: isCI ? ['json-summary'] : ['json-summary', "html"],
      thresholds: {
        branches: 95,
        functions: 95,
        lines: 95,
        statements: 95
      },
      include: [
        'src/**/*',
      ],
    },

  }
})
