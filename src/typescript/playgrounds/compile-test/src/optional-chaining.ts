type Foo = {
  bar?: {
    baz?: {
      qux?: string
    }
  }
}

export const foo: Foo = {}

console.log(foo.bar)
console.log(foo.bar?.baz)
console.log(foo.bar?.baz?.qux)
