// node test.mjs
import Level from 'level'
import pull from 'pull-stream'
import pullLevel from 'pull-level'
import { promisify as p } from 'util'

const db = Level('/tmp/level-test', { valueEncoding: 'json' })

await db.put('dog', { name: 'tony' })
await db.put('cat', { name: 'nala' })

const map = new Map()
await pull(
  pullLevel.read(db, { live: false }),
  pull.map(row => {
    map.set(row.key, row.value)
    return
  }),
  pull.collectAsPromise()
)

console.log('pull-stream', map)

let isDone = false
const map2 = new Map()
const it = db.iterator()

while (!isDone) {
  await new Promise((resolve, reject) => {
    it.next((err, key, value) => {
      if (err) return reject(err)

      if (!key) isDone = true
      else map2.set(key, value)
      resolve(null)
    })
  })
}
it.end(err => err && console.error(err))
console.log('iterator', map2)

await db.close()
