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
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90
      },
      include: [
        'src/**/*',
      ],
    },

  }
})
