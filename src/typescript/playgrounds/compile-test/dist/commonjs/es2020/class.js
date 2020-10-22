"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar = exports.Foo = void 0;
class Foo {
    constructor() {
        this.foo = 'foo';
        this.bar = 'bar';
        this._baz = 'baz';
    }
    get qux() {
        return this._baz;
    }
}
exports.Foo = Foo;
class Bar {
    constructor(foo, _bar) {
        this.foo = foo;
        this._bar = _bar;
    }
    get bar() {
        return this._bar;
    }
}
exports.Bar = Bar;
