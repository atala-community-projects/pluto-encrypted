/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    reporters: ['verbose'], // or 'verbose'
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['json-summary'],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90
      }
    },
  }
})
