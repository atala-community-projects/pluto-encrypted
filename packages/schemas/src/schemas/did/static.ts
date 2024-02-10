import SDK from '@atala/prism-wallet-sdk'
import { v4 as uuidv4 } from 'uuid'

import { KeySpec } from '../privatekey'
import { DIDStaticMethodTypes } from './types'



export const DIDStaticMethods: DIDStaticMethodTypes = {
    async storePrismDID(did: SDK.Domain.DID, keyPathIndex: number, privateKey: SDK.Domain.PrivateKey, _privateKeyMetaId?: string | null | undefined, alias?: string | undefined): Promise<void> {
        await this.db.collections.dids.insert({
            did: did.toString(),
            method: did.method,
            methodId: did.methodId,
            schema: did.schema,
            alias
        })
        await this.storePrivateKeys(
            privateKey,
            did,
            keyPathIndex,
        )
    },
    async getAllPrismDIDs(): Promise<SDK.Domain.PrismDIDInfo[]> {
        const dids = await this.db.collections.dids.find({
            selector: {
                method: {
                    $eq: 'prism'
                }
            }
        }).exec()

        const prismDIDInfo: SDK.Domain.PrismDIDInfo[] = []

        for (const did of dids) {
            const didPrivateKeys = await this.getDIDPrivateKeysByDID!(
                SDK.Domain.DID.fromString(did.did)
            )

            for (const privateKey of didPrivateKeys) {
                const indexProp = privateKey.getProperty(SDK.Domain.KeyProperties.index)!

                prismDIDInfo.push(
                    new SDK.Domain.PrismDIDInfo(
                        SDK.Domain.DID.fromString(did.did),
                        parseInt(indexProp),
                        did.alias
                    )
                )
            }
        }

        return prismDIDInfo
    },
    async getDIDInfoByDID(did: SDK.Domain.DID): Promise<SDK.Domain.PrismDIDInfo | null> {
        const didDB = await this.db.collections.dids.findOne({
            selector: {
                did: did.toString()
            }
        }).exec()

        if (didDB) {
            const privateKeys = await this.getDIDPrivateKeysByDID!(
                SDK.Domain.DID.fromString(didDB.did)
            )
            /* istanbul ignore if */
            if (privateKeys.length === 0) {
                throw new Error(
                    'Imposible to recover PrismDIDInfo without its privateKey data.'
                )
            }
            const indexProp = privateKeys
                .at(0)!
                .getProperty(SDK.Domain.KeyProperties.index)
            const index = indexProp ? parseInt(indexProp) : undefined
            return new SDK.Domain.PrismDIDInfo(
                SDK.Domain.DID.fromString(didDB.did),
                index,
                didDB.alias
            )
        }

        return null
    },
    async getDIDInfoByAlias(alias: string): Promise<SDK.Domain.PrismDIDInfo[]> {
        const dids = await this.db.collections.dids.find({
            selector: {
                alias: {
                    $eq: alias
                }
            }
        }).exec()
        const prismDIDInfo: SDK.Domain.PrismDIDInfo[] = []
        for (const did of dids) {
            const didPrivateKeys = await this.getDIDPrivateKeysByDID!(
                SDK.Domain.DID.fromString(did.did)
            )
            for (const privateKey of didPrivateKeys) {
                const indexProp = privateKey.getProperty(SDK.Domain.KeyProperties.index)!
                prismDIDInfo.push(
                    new SDK.Domain.PrismDIDInfo(
                        SDK.Domain.DID.fromString(did.did),
                        parseInt(indexProp),
                        did.alias
                    )
                )
            }
        }
        return prismDIDInfo
    },
    async getPrismDIDKeyPathIndex(did: SDK.Domain.DID): Promise<number | null> {
        const [key] = await this.getDIDPrivateKeysByDID!(did)
        if (!key) {
            return 0
        }
        return key.index + 1
    },

    async getPrismLastKeyPathIndex(): Promise<number> {
        const results = await this.getAllPrismDIDs!()
        if (!results || results.length === 0) {
            return 0
        }
        const maxim = Math.max(...results.map((result) => result.keyPathIndex))
        return maxim + 1
    },
    async getAllPeerDIDs(): Promise<SDK.PeerDID[]> {
        const peerDIDs: SDK.PeerDID[] = []
        const dids = await this.db.collections.dids.find({
            selector: {
                method: {
                    $eq: 'peer'
                }
            }
        }).exec()
        for (const did of dids) {
            const peerDID = SDK.Domain.DID.fromString(did.did)
            const keys = await this.getDIDPrivateKeysByDID!(peerDID)
            peerDIDs.push(
                new SDK.PeerDID(
                    peerDID,
                    keys.map((key) => ({
                        keyCurve: {
                            curve: key.curve as any
                        },
                        value: key.raw
                    }))
                )
            )
        }
        return peerDIDs
    },
    /**
    * Stores a peerdid with its privateKeys
    * @param did
    * @param privateKeys
    */
    async storePeerDID(
        did: SDK.Domain.DID,
        privateKeys: SDK.Domain.PrivateKey[]
    ): Promise<void> {
        await this.db.collections.dids.insert({
            did: did.toString(),
            method: did.method,
            methodId: did.methodId,
            schema: did.schema
        })
        for (const prv of privateKeys) {
            await this.db.collections.privatekeys.insert({
                id: uuidv4(),
                did: did.toString(),
                type: prv.type,
                keySpecification: Array.from(prv.keySpecification).reduce<KeySpec[]>(
                    (all, [key, value]) => [
                        ...all,
                        {
                            type: 'string',
                            name: key,
                            value: `${value}`
                        }
                    ],
                    [
                        {
                            type: 'string',
                            name: 'raw',
                            value: Buffer.from(prv.raw).toString('hex')
                        }
                    ]
                )
            })
        }
    },


}