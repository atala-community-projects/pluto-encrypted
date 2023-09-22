import { Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import { RxJsonSchema, RxCollection, RxDatabase } from "rxdb";
export type ExcludeKeys<T, K extends keyof T> = Omit<T, K>;
export type GenerateDBSchema<T> = RxJsonSchema<T> & {
  encrypted: (keyof T)[];
};
export type MessagesCollection = RxCollection<Domain.Message>;
export type PlutoDatabase = RxDatabase<{
  messages: MessagesCollection;
}>;
export type CredentialSchemaType = Domain.VerifiableCredential;
export type DIDSchemaType = ExcludeKeys<
  Domain.DID & { readonly alias: string; readonly did: string },
  "toString"
>;
export type DIDPairSchemaType = Domain.DIDPair & { readonly id: string };
export type KeySchemaType = ExcludeKeys<
  ExcludeKeys<
    ExcludeKeys<
      ExcludeKeys<
        ExcludeKeys<
          ExcludeKeys<
            ExcludeKeys<
              ExcludeKeys<Domain.Key & { readonly id: string }, "isExportable">,
              "size"
            >,
            "getProperty"
          >,
          "isDerivable"
        >,
        "isSignable"
      >,
      "getEncoded"
    >,
    "canVerify"
  >,
  "isCurve"
>;
