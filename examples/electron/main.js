'use strict'
const crypto = require('crypto').webcrypto;
global.crypto = crypto
global.crypto.getRandomValues = crypto.getRandomValues
const { app, BrowserWindow, ipcMain } = require('electron')

async function createTestScenario(leveldb) {

  const PlutoEncrypted = await import('@pluto-encrypted/database')
  const { createLevelDBStorage } = await import("@pluto-encrypted/leveldb")
  const SDK = await import("@atala/prism-wallet-sdk");

  const { Database } = PlutoEncrypted;
  const defaultPassword = Buffer.from("test password");
  const mediatorDID = SDK.Domain.DID.fromString(
    "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19"
  );
  const apollo = new SDK.Apollo();
  const api = new SDK.ApiImpl();
  const castor = new SDK.Castor(apollo);
  const pluto = await Database.createEncrypted(
    {
      name: `my-db`,
      encryptionKey: defaultPassword,
      storage: createLevelDBStorage({ level: leveldb }),
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




const { ClassicLevel } = require('classic-level')
const { ManyLevelHost } = require('many-level')


const { pipeline, Duplex, PassThrough, Writable } = require('readable-stream')
const { join } = require('path')



app.enableSandbox()
app.once('ready', async function () {
  const db = new ClassicLevel('./db')
  const host = new ManyLevelHost(db)

  await db.open()
  const { seed, agent, SDK } = await createTestScenario(db);
  console.log(
    `Welcome to PrismEdge Agent, state ${agent.state
    } with mnemonics ${seed.mnemonics.join(", ")}`,
  );


  agent.addListener(SDK.ListenerKey.MESSAGE, (message) => {
    console.log("Got new message", message);
  });

  await agent.start();

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


  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Enables renderer process to communicate with us
      preload: join(__dirname, 'preload.js')
    }
  })

  window.loadURL('file://' + join(__dirname, 'renderer.html'))
  window.openDevTools()

  // Wrap Electron IPC in a duplex Node.js stream
  const ipcStream = wrapIPC(window.webContents)

  pipeline(ipcStream, host.createRpcStream(), ipcStream, (err) => {
    // Called when streams close, with an optional error
    console.log('Disconnected', err)
  })
})

app.on('window-all-closed', function () {
  app.quit()
})

function wrapIPC(webContents) {
  const handleMessage = (event, msg) => {
    if (event.sender === webContents) {
      readable.write(msg)
    }
  }

  // Data sent from renderer to main process (via preload script)
  const readable = new PassThrough({
    construct(callback) {
      ipcMain.on('level', handleMessage)
      callback()
    },
    destroy(err, callback) {
      ipcMain.removeListener('level', handleMessage)
      callback(err)
    }
  })

  // Data sent from main process to renderer (via preload script)
  const writable = new Writable({
    write(chunk, _, next) {
      webContents.send('level', chunk)
      next()
    }
  })

  // TODO: destroy on window close
  return Duplex.from({ readable, writable })
}
