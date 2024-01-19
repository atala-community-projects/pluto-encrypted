import "./setup";

import { describe, it, beforeEach, afterEach } from 'vitest';
import { runTestSuite } from '@pluto-encrypted/test-suite';
import { createIagonStorage } from '../src'

if (!process.env.IAGON_API_KEY) {
  throw new Error("Please add IAGON_API_KEY env var with your IagonAPI")
}

if (!process.env.IAGON_PW) {
  throw new Error("Please add IAGON_PW env var with your IagonAPI")
}

const iagonStorage = createIagonStorage({
  apiKey: process.env.IAGON_API_KEY,
  password: Buffer.from(process.env.IAGON_PW),
})

describe("Testing suite", () => {
  runTestSuite({
    describe, it, beforeEach, afterEach
  }, {
    name: 'iagon',
    getStorage() {
      return iagonStorage
    },
    getPerformanceStorage() {
      return {
        storage: iagonStorage,
        description: 'any'
      }
    },
    hasPersistence: true,
    hasMultiInstance: false,
    hasAttachments: false,
    hasBooleanIndexSupport: false,
    async hasEncryption() {
      return 'RandomPassword'
    }
  })
})
