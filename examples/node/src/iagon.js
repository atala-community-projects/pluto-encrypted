if (!process.env.IAGON_API_KEY) {
    throw new Error("Please add IAGON_API_KEY env var with your IagonAPI")
}

if (!process.env.IAGON_PW) {
    throw new Error("Please add IAGON_PW env var with your IagonAPI")
}
import { getDefaultCollections } from '@pluto-encrypted/schemas';

async function createTestScenario() {

    const { Database } = await import('@pluto-encrypted/database')
    const { createIagonStorage } = await import("@pluto-encrypted/iagon")
    const { default: SDK } = await import("@atala/prism-wallet-sdk");
    const defaultPassword = new Uint8Array(32).fill(1);
    const mediatorDID = SDK.Domain.DID.fromString(
        "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19"
    );
    const apollo = new SDK.Apollo();
    const api = new SDK.ApiImpl();
    const castor = new SDK.Castor(apollo);
    const storage = createIagonStorage({
        apiKey: process.env.IAGON_API_KEY,
        password: process.env.IAGON_PW
    });
    const pluto = await Database.createEncrypted(
        {
            name: `pluto-encrypted`,
            encryptionKey: defaultPassword,
            storage: storage,
            collections: getDefaultCollections()
        }
    );
    const didcomm = new SDK.DIDCommWrapper(apollo, castor, pluto);
    const mercury = new SDK.Mercury(castor, didcomm, api);
    const store = new SDK.PublicMediatorStore(pluto);
    const handler = new SDK.BasicMediatorHandler(mediatorDID, mercury, store);
    const manager = new SDK.ConnectionsManager(castor, mercury, pluto, handler);
    const seed = apollo.createRandomSeed();
    const agent = new SDK.Agent(
        apollo,
        castor,
        pluto,
        mercury,
        handler,
        manager,
        seed.seed,
    );
    return {
        SDK,
        apollo,
        seed,
        agent,
        mercury,
        pluto,
        castor,
    };
}

(async () => {


    const { seed, agent, SDK } = await createTestScenario();

    agent.addListener(SDK.ListenerKey.MESSAGE, (message) => {
        console.log("Got new message", message);
    });

    await agent.start();
    console.log(
        `Welcome to PrismEdge Agent, state ${agent.state
        } with mnemonics ${seed.mnemonics.join(", ")}`,
    );

    try {
        const secondaryDID = await agent.createNewPeerDID([], true);
        const message = new SDK.BasicMessage(
            { content: "Test Message" },
            secondaryDID,
            secondaryDID,
        );

        await agent.sendMessage(message.makeMessage());
        await agent.sendMessage(message.makeMessage());
        console.log("Sent");
    } catch (err) {
        console.log(
            "Safe to ignore, mediator returns null on successfully receiving the message, unpack fails.",
        );
    }
})();
