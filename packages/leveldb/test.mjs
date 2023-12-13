// node test.mjs

import Level from 'level'
import pull from 'pull-stream'
import pullLevel from 'pull-level'

const db = Level('/tmp/level-test')

await db.put('dog', 'tony')
await db.put('cat', 'nala')

await pull(
  pullLevel.read(db),
  pull.map(({ key, value }) => {
    console.log(key, '=', value)
    return
  }),
  pull.collectAsPromise()
)

await db.close()
console.log('DONE')
