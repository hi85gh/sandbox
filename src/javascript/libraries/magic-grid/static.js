import MagicGrid from './node_modules/magic-grid/dist/magic-grid.esm.js'

const staticGrid = new MagicGrid({
  animate: true,
  container: '.static-grid',
  gutter: 30,
  static: true,
  useMin: true,
})

staticGrid.listen()
