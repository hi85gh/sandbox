import equal from 'fast-deep-equal'

const foo = { bar: 'baz' }

console.log(equal(foo, { ...foo })) // true
