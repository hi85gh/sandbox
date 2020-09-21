import { closeSync, openSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const directoryPath = dirname(fileURLToPath(import.meta.url))
const filePath = resolve(directoryPath, '../dist/.gitkeep')

closeSync(openSync(filePath, 'w'))
