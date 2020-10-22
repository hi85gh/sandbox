async function foo() {
  await new Promise<never>((resolve) => setTimeout(resolve, 1000))
}

;(async () => {
  await foo()
})()
