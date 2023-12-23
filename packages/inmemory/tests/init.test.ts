import "./setup";

import { describe, it, vi, beforeEach, afterEach } from 'vitest';
import { runTestSuite } from '@pluto-encrypted/test-suite';


import InMemory from '../src'
import { InMemoryInternal } from "../src/inMemoryStorage/internal";
import sinon from "sinon";

const keyData = new Uint8Array(32);

describe("Testing suite", () => {
  runTestSuite({
    describe, it, beforeEach, afterEach
  }, {
    name: 'inmemory',
    getStorage() {
      return InMemory
    },
    getPerformanceStorage() {
      return {
        storage: InMemory,
        description: 'any'
      }
    },
    hasPersistence: true,
    hasMultiInstance: false,
    hasAttachments: false,
    hasBooleanIndexSupport: true,
    async hasEncryption() {
      return 'RandomPassword'
    }
  })

  it("Should allow removing a non existing index", async ({ expect }) => {
    const inMemoryInternal = new InMemoryInternal(0)
    const mock = sinon.stub(inMemoryInternal.index, 'has').returns(false)

    inMemoryInternal.addIndex("existingIndex", "1")
    inMemoryInternal.removeFromIndex("non-existingIndex", "1")

    expect(inMemoryInternal.index.size).toBe(1)
    sinon.assert.callCount(mock, 2)

  })

  it("Should allow removing a non existing index", async ({ expect }) => {
    const inMemoryInternal = new InMemoryInternal(0)
    const mock = sinon.stub(inMemoryInternal.index, 'has').returns(true)
    const mock2 = sinon.stub(inMemoryInternal.index, 'get').returns(undefined)

    inMemoryInternal.addIndex("existingIndex", "1")
    inMemoryInternal.removeFromIndex("non-existingIndex", "1")

    expect(inMemoryInternal.index.size).toBe(2)
    expect(inMemoryInternal.index.get('non-existingIndex')).toStrictEqual(undefined)
    sinon.assert.callCount(mock, 2)
    sinon.assert.callCount(mock2, 3)
  })
})
