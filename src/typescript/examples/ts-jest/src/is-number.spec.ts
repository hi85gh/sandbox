import { isNumber } from '~/is-number'

test('Expect true.', () => {
  expect(isNumber(0)).toBe(true)

  expect(isNumber(1)).toBe(true)

  expect(isNumber(-1)).toBe(true)

  expect(isNumber(1.01)).toBe(true)

  expect(isNumber(-1.01)).toBe(true)
})

test('Expect false.', () => {
  expect(isNumber(null)).toBe(false)

  expect(isNumber(undefined)).toBe(false)

  expect(isNumber(NaN)).toBe(false)

  expect(isNumber(true)).toBe(false)

  expect(isNumber(false)).toBe(false)

  expect(isNumber('string')).toBe(false)

  expect(isNumber([])).toBe(false)

  expect(isNumber({})).toBe(false)

  expect(isNumber(() => {})).toBe(false)
})

test('Returns a boolean.', () => {
  expect(isNumber(0)).toBeBoolean()
})
