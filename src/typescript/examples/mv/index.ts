/// <reference types="node" />
/// <reference types="mv" />

import { join } from 'path'
import { promisify } from 'util'
import mv from 'mv'

const mvPromises = promisify(mv)

;(async () => {
  const from = join(__dirname, 'foo')
  const to = join(__dirname, 'dist')
  await mvPromises(from, to) // foo/bar/baz/empty.txt -> dist/bar/baz/empty.txt
  console.log('done.')
})()
