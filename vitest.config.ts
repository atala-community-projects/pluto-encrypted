/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    reporters: ['default'], // or 'verbose'
    coverage: {
      provider: 'v8',
      reporter: ['json-summary'],
      thresholds: {
        branches: 95,
        functions: 95,
        lines: 95,
        statements: 95
      }
    },
  }
})
