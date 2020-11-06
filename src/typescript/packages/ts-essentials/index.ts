import type { DeepReadonly } from 'ts-essentials'

type NestedObject = {
  nested: {
    str: string
    nested: {
      arr: [{ foo: string }]
    }
  }
}

type NestedObjectReadonly = DeepReadonly<NestedObject>

/**
 * Demonstration
 */
const writableObject: NestedObject = {} as NestedObject

const readonlyObject: NestedObjectReadonly = writableObject

/* Pass */
writableObject.nested.str = 'foo'
writableObject.nested.nested.arr = [{ foo: 'foo' }]

/* Error */
readonlyObject.nested.str = 'foo'
readonlyObject.nested.nested.arr = [{ foo: 'foo' }]
