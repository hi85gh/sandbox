export class Foo {
    constructor() {
        this.foo = 'foo';
        this.bar = 'bar';
        this._baz = 'baz';
    }
    get qux() {
        return this._baz;
    }
}
export class Bar {
    constructor(foo, _bar) {
        this.foo = foo;
        this._bar = _bar;
    }
    get bar() {
        return this._bar;
    }
}
