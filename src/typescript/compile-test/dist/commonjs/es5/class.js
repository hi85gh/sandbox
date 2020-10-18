"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar = exports.Foo = void 0;
var Foo = /** @class */ (function () {
    function Foo() {
        this.foo = 'foo';
        this.bar = 'bar';
        this._baz = 'baz';
    }
    Object.defineProperty(Foo.prototype, "qux", {
        get: function () {
            return this._baz;
        },
        enumerable: false,
        configurable: true
    });
    return Foo;
}());
exports.Foo = Foo;
var Bar = /** @class */ (function () {
    function Bar(foo, _bar) {
        this.foo = foo;
        this._bar = _bar;
    }
    Object.defineProperty(Bar.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        enumerable: false,
        configurable: true
    });
    return Bar;
}());
exports.Bar = Bar;
