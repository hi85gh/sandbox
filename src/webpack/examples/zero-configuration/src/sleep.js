export const sleep = (millisecond = 1000) =>
  new Promise((resolve) => setTimeout(resolve, millisecond))
