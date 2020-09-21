import MagicGrid from '../node_modules/magic-grid/dist/magic-grid.esm.js'

const items = 100
const magicGrid = new MagicGrid({
  animate: true,
  container: '.magic-grid',
  items,
  useMin: true,
})

magicGrid.listen()
;(async () => {
  const target = document.querySelector('.magic-grid')
  const fragment = document.createDocumentFragment()

  ;[...Array(items)].map(() => {
    fragment.appendChild(document.createElement('div'))
  })

  await new Promise((resolve) => setTimeout(resolve, 3000))
  target.appendChild(fragment)
  magicGrid.positionItems() // manual
})()
