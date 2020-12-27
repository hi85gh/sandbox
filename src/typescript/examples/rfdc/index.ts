import rfdc from 'rfdc'

const clone = rfdc()

const foo = {
  bar: {
    baz: {
      qux: {
        quux: {
          corge: {
            grault: {
              garply: {
                waldo: {
                  fred: {
                    plugh: {
                      xyzzy: {
                        thud: 0,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

console.log(JSON.stringify(clone(foo)))
