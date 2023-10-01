import { Ed25519PrivateKey, KeyProperties, Secp256k1PrivateKey, X25519PrivateKey, Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import type { Schema } from "../types";
import { RxCollection, RxDocument } from "rxdb";

/**
 * PrivateKeySchema
 */
export type KeySpec = {
  name: string;
  type: string;
  value: string;
};
export type KeySchemaType = {
  id: string;
  type: string;
  did: string;
  keySpecification: KeySpec[];
};

const PrivateKeySchema: Schema<KeySchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 60,
    },
    did: {
      type: "string",
    },
    type: {
      type: "string",
    },
    keySpecification: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          type: {
            type: "string",
          },
          value: {
            type: "string",
          },
        },
      },
    },
  },
  encrypted: ["keySpecification", "type"],
  required: ["keySpecification", "did", "type", "id"],
};

export type PrivateKeyMethodTypes = {
  toPrivateKey: () => Domain.PrivateKey
}
export type PrivateKeyColletion = RxCollection<KeySchemaType, PrivateKeyMethodTypes>;
export type PrivateKeyDocument = RxDocument<KeySchemaType, PrivateKeyMethodTypes>
export const PrivateKeyMethods: PrivateKeyMethodTypes = {
  toPrivateKey: function (this: KeySchemaType) {
    const { type, keySpecification } = this;
    const curve = keySpecification.find(
      (item) => item.name === KeyProperties.curve
    );
    const raw = keySpecification.find(
      (item) => item.name === KeyProperties.rawKey
    );
    if (!(type in Domain.KeyTypes)) {
      throw new Error(`Invalid KeyType ${type}`);
    }
    if (!curve) {
      throw new Error("Undefined key curve");
    }
    if (!raw) {
      throw new Error("Undefined key raw");
    }

    if (
      curve.value !== Domain.Curve.SECP256K1 &&
      curve.value !== Domain.Curve.ED25519 &&
      curve.value !== Domain.Curve.X25519
    ) {
      throw new Error(`Invalid key curve ${curve.value}`);
    }

    if (type === Domain.KeyTypes.EC) {
      if (curve.value === Domain.Curve.SECP256K1) {
        const index = keySpecification.find(
          (item) => item.name === KeyProperties.index
        );
        const seed = keySpecification.find(
          (item) => item.name === KeyProperties.seed
        );

        const privateKey = new Secp256k1PrivateKey(
          Buffer.from(raw.value, "hex")
        );

        privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value);

        privateKey.keySpecification.set(
          Domain.KeyProperties.curve,
          Domain.Curve.SECP256K1
        );

        if (index) {
          privateKey.keySpecification.set(
            Domain.KeyProperties.index,
            index.value
          );
        }

        if (seed) {
          privateKey.keySpecification.set(
            Domain.KeyProperties.seed,
            seed.value
          );
        }

        return privateKey;
      }

      if (curve.value === Domain.Curve.ED25519) {
        const privateKey = new Ed25519PrivateKey(Buffer.from(raw.value, "hex"));

        privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value);

        privateKey.keySpecification.set(
          Domain.KeyProperties.curve,
          Domain.Curve.SECP256K1
        );

        return privateKey;
      }
    }

    if (type === Domain.KeyTypes.Curve25519) {
      if (curve.value === Domain.Curve.X25519) {
        const privateKey = new X25519PrivateKey(Buffer.from(raw.value, "hex"));

        privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value);

        privateKey.keySpecification.set(
          Domain.KeyProperties.curve,
          Domain.Curve.SECP256K1
        );

        return privateKey;
      }
    }

    throw new Error(`Invalid key${curve.value} ${type}`);
  }

}

export default PrivateKeySchema;
