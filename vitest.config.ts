/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    reporters: ['verbose'], // or 'verbose'
    coverage: {

      provider: 'istanbul',
      reporter: ['json-summary', "html"],
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
