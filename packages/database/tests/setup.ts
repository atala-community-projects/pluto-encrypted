import "fake-indexeddb/auto";
import { TextEncoder, TextDecoder } from "util";
import nodeCrypto from "crypto";

Object.defineProperty(globalThis, "crypto", {
  value: {
    getRandomValues: (arr) => nodeCrypto.getRandomValues(arr),
  },
});

Object.assign(global, { TextDecoder, TextEncoder });
