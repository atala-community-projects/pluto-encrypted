import {
  Apollo, ApiImpl, DIDCommWrapper, Mercury, PublicMediatorStore, BasicMediatorHandler, ConnectionsManager, Agent, Domain
} from '@atala/prism-wallet-sdk';
import InMemory from "@pluto-encrypted/inmemory";
import { Database } from "@pluto-encrypted/database";



let database;

async function createTestScenario(mediatorDID) {
  database = await Database.createEncrypted(
    {
      name: `my-db`,
      encryptionKey: defaultPassword,
      storage: InMemory,
    }
  );
  const apollo = new Apollo();
  const api = new ApiImpl();
  const castor = new Castor(apollo);
  const pluto = database;
  const didcomm = new DIDCommWrapper(apollo, castor, pluto);
  const mercury = new Mercury(castor, didcomm, api);
  const store = new PublicMediatorStore(pluto);
  const handler = new BasicMediatorHandler(mediatorDID, mercury, store);
  const manager = new ConnectionsManager(castor, mercury, pluto, handler);
  const seed = apollo.createRandomSeed();
  const agent = new Agent(
    apollo,
    castor,
    pluto,
    mercury,
    handler,
    manager,
    seed.seed,
  );
  return {
    apollo,
    seed,
    agent,
    mercury,
    pluto,
    castor,
  };
}

(async () => {
  const mediatorDID = Domain.DID.fromString(
    "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19"
  );

  const { seed, agent } = await createTestScenario(mediatorDID);

  agent.addListener(ListenerKey.MESSAGE, async (message) => {
    console.log("Got new message", message);
  });

  await agent.start();
  console.log(
    `Welcome to PrismEdge Agent, state ${agent.state
    } with mnemonics ${seed.mnemonics.join(", ")}`,
  );

  try {
    const secondaryDID = await agent.createNewPeerDID([], true);
    const message = new BasicMessage(
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
