export class Foo {
  foo: string
  public bar: string
  private _baz: string // target: es3 は非対応

  constructor() {
    this.foo = 'foo'
    this.bar = 'bar'
    this._baz = 'baz'
  }

  get qux() {
    return this._baz
  }
}

export class Bar {
  constructor(public foo: string, private _bar: string) {}

  get bar() {
    return this._bar
  }
}
