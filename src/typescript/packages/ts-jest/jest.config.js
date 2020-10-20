/**
 * Reference: https://kulshekhar.github.io/ts-jest/user/config/#ide-ts-jest-config-suggestion
 *
 * @typedef {import('ts-jest')}
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
}

module.exports = config
