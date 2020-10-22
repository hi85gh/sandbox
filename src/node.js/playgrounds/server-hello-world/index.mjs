// Referred: https://twitter.com/bengl/status/1296531177919131649
import { createServer } from 'http'
import { on } from 'events'

const reqs = on(createServer().listen(3000), 'request')

/**
 * Requires Node.js v14.8.0 or above.
 * (Starting with v14.3.0, the `--experimental-top-level-await` flag is required.)
 */
for await (const [_, res] of reqs) res.end('Hello, World!\n')
