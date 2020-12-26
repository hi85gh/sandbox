/// <reference types="node" />

import axios from 'axios'
import { createServer } from 'http'

/* Mock */
createServer(async (_, res) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  res.statusCode = 200
  res.end()
}).listen(3000, () => {
  console.log('Server running.')
})

/* Default: default is `0` (no timeout) */
console.time('Request success: ')
axios.get('http://localhost:3000/api').then(() => {
  console.timeEnd('Request success: ')
})

/* Define: 1000; */
console.time('Request timeout: ')
axios.get('http://localhost:3000/api', { timeout: 1000 }).catch(() => {
  console.timeEnd('Request timeout: ')
})
