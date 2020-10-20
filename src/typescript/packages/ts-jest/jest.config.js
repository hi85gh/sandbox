const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

/**
 * Reference: https://kulshekhar.github.io/ts-jest/user/config/#ide-ts-jest-config-suggestion
 *
 * @typedef {import('ts-jest')}
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  /* Reference: https://kulshekhar.github.io/ts-jest/user/config/#jest-config-with-helper */
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
}

module.exports = config
