/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    reporters: ['default'], // or 'verbose'
    coverage: {
      provider: 'v8',
      reporter: ['json-summary', 'html'],
      thresholds: {
        branches: 58,
        functions: 64,
        lines: 74,
        statements: 71
      }
    },
  }
})
