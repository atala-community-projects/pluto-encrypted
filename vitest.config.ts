/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    reporters: ['default'], // or 'verbose'
    coverage: {
      provider: 'istanbul' // or 'v8'
    }
  }
})
