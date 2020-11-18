const target = {
  message: 'Hello, World!',
}

/**
 * `ProxyHandler` の利用条件
 * - `tsconfig.json` で `compilerOptions.target` が `ES2015` (ES6) 以上であること
 */
const handler: ProxyHandler<typeof target> = {
  set: (obj, prop, value) => {
    /**
     * 値の検証など処理を入れることが可能。
     */
    if (typeof value !== 'string') {
      return false
    }

    /**
     * `compilerOptions.noImplicitAny` (`compilerOptions.strict`) が `true` の場合、以下の記述はエラーとなる。
     *
     * ```ts
     * // Error
     * obj[prop] = value
     * ```
     *
     * 以下のようにアサーションを使用して回避することもできるが `Reflect` を使用する。
     *
     * ```ts
     * // Bad
     * obj[prop as keyof typeof obj] = value
     * ```
     */
    return Reflect.set(obj, prop, value)
  },
}

const proxy = new Proxy(target, handler)

try {
  // @ts-ignore
  proxy.message = 0
} catch (error) {
  console.error(error.message)
} finally {
  console.log(proxy.message) // 値は 'Hello, World!' のまま
}

proxy.message = 'Hello, New World!'
console.log(proxy.message) // 値は 'Hello, New World!' に上書きされている
