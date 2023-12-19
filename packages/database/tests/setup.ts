import "fake-indexeddb/auto";
import { TextEncoder, TextDecoder } from "util";
import nodeCrypto from "crypto";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { addRxPlugin } from "rxdb";


if (process.env.NODE_ENV === "debug") {
  addRxPlugin(RxDBDevModePlugin);
}

Object.defineProperty(globalThis, "crypto", {
  value: {
    getRandomValues: (arr) => nodeCrypto.getRandomValues(arr),
  },
});

Object.assign(global, { TextDecoder, TextEncoder });
