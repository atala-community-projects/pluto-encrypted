import SDK from '@atala/prism-wallet-sdk'
import { PrivateKeyDocument, PrivateKeyMethodTypes } from './types';

export const PrivateKeyMethods: PrivateKeyMethodTypes = {
    toDomainPrivateKey: function toDomainPrivateKey(this: PrivateKeyDocument) {
        const { type, keySpecification } = this
        const curve = keySpecification.find(
            (item) => item.name === SDK.KeyProperties.curve
        )
        const raw = keySpecification.find(
            (item) => item.name === SDK.KeyProperties.rawKey
        )
        if (!(type in SDK.Domain.KeyTypes)) {
            throw new Error(`Invalid KeyType ${type || 'undefined'}`)
        }
        if (!curve) {
            throw new Error('Undefined key curve')
        }

        if (
            curve.value !== SDK.Domain.Curve.SECP256K1 &&
            curve.value !== SDK.Domain.Curve.ED25519 &&
            curve.value !== SDK.Domain.Curve.X25519
        ) {
            throw new Error(`Invalid key curve ${curve.value}`)
        }

        if (!raw) {
            throw new Error('Undefined key raw')
        }

        /* istanbul ignore else -- @preserve */
        if (curve.value === SDK.Domain.Curve.SECP256K1) {
            const index = keySpecification.find(
                (item) => item.name === SDK.KeyProperties.index
            )
            const seed = keySpecification.find(
                (item) => item.name === SDK.KeyProperties.seed
            )

            const privateKey = new SDK.Secp256k1PrivateKey(
                Buffer.from(raw.value, 'hex')
            )

            privateKey.keySpecification.set(SDK.Domain.KeyProperties.rawKey, raw.value)

            privateKey.keySpecification.set(
                SDK.Domain.KeyProperties.curve,
                SDK.Domain.Curve.SECP256K1
            )

            if (index) {
                privateKey.keySpecification.set(
                    SDK.Domain.KeyProperties.index,
                    index.value
                )
            }

            if (seed) {
                privateKey.keySpecification.set(
                    SDK.Domain.KeyProperties.seed,
                    seed.value
                )
            }

            return privateKey
        } else if (curve.value === SDK.Domain.Curve.ED25519) {
            const privateKey = new SDK.Ed25519PrivateKey(Buffer.from(raw.value, 'hex'))

            privateKey.keySpecification.set(SDK.Domain.KeyProperties.rawKey, raw.value)

            privateKey.keySpecification.set(
                SDK.Domain.KeyProperties.curve,
                SDK.Domain.Curve.ED25519
            )

            return privateKey
        } else if (curve.value === SDK.Domain.Curve.X25519) {
            const privateKey = new SDK.X25519PrivateKey(Buffer.from(raw.value, 'hex'))

            privateKey.keySpecification.set(SDK.Domain.KeyProperties.rawKey, raw.value)

            privateKey.keySpecification.set(
                SDK.Domain.KeyProperties.curve,
                SDK.Domain.Curve.X25519
            )

            return privateKey
        } else {
            /* istanbul ignore next -- @preserve */
            throw new Error(`Invalid key ${curve.value} ${type}`)
        }
    }
}