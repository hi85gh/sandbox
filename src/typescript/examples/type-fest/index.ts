import type { ReadonlyDeep } from 'type-fest'

type NestedObject = {
  nested: {
    str: string
    nested: {
      arr: [{ foo: string }]
    }
  }
}

type ReadonlyNestedObject = ReadonlyDeep<NestedObject>

/**
 * Demonstration
 */
const writableObject: NestedObject = {} as NestedObject

const readonlyObject: ReadonlyNestedObject = writableObject

/* Pass */
writableObject.nested.str = 'foo'
writableObject.nested.nested.arr = [{ foo: 'foo' }]

/* Error */
readonlyObject.nested.str = 'foo'
readonlyObject.nested.nested.arr = [{ foo: 'foo' }]
