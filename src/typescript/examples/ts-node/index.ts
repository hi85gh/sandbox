import { createServer } from 'http'
import { on } from 'events'

const reqs = on(createServer().listen(3000), 'request')

;(async () => {
  for await (const [_, res] of reqs) res.end('Hello, World!\n')
})()
