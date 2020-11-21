/// <reference types="node" />

import { createServer } from 'http'
import { on } from 'events'
import ngrok from 'ngrok'

const PORT = 3000
const reqs = on(createServer().listen(PORT), 'request')

;(async function () {
  const url = await ngrok.connect({ addr: PORT })
  console.log(`ngrok forwarding: ${url} -> localhost:${PORT}`)
  for await (const [_, res] of reqs) res.end('Hello, World!\n')
})()
