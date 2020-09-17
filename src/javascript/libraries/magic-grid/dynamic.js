import MagicGrid from './node_modules/magic-grid/dist/magic-grid.esm.js'

const items = 100
const dynamicGrid = new MagicGrid({
  animate: true,
  container: '.dynamic-grid',
  items,
  useMin: true,
})

dynamicGrid.listen()
;(async () => {
  const target = document.querySelector('.dynamic-grid')
  const fragment = document.createDocumentFragment()

  ;[...Array(items)].map(() => {
    fragment.appendChild(document.createElement('div'))
  })

  await new Promise((resolve) => setTimeout(resolve, 1000))
  target.appendChild(fragment)
  dynamicGrid.positionItems() // manual
})()
