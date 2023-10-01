import {
  Ed25519KeyPair,
  Ed25519PrivateKey,
  Secp256k1KeyPair,
  Secp256k1PrivateKey,
  X25519KeyPair,
  X25519PrivateKey,
} from "@input-output-hk/atala-prism-wallet-sdk";

const secpPrivateKey = new Secp256k1PrivateKey(
  new Uint8Array([
    45, 182, 188, 189, 107, 229, 136, 180, 199, 177, 110, 84, 98, 140, 121, 84,
    107, 105, 179, 139, 14, 174, 177, 63, 173, 141, 7, 118, 161, 192, 192, 221,
  ])
);
export const secp256K1 = new Secp256k1KeyPair(
  secpPrivateKey,
  secpPrivateKey.publicKey()
);

const ed25519PrivateKey = new Ed25519PrivateKey(
  Buffer.from("JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs")
);
export const ed25519 = new Ed25519KeyPair(
  ed25519PrivateKey,
  ed25519PrivateKey.publicKey()
);

const x25519PrivateKey = new X25519PrivateKey(
  Buffer.from("eHbEtI71XIBIsuQK7XdjZ_ZPnLZb3y4paWoqSoS7BnI")
);
export const x25519 = new X25519KeyPair(
  x25519PrivateKey,
  x25519PrivateKey.publicKey()
);
