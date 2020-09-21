import MagicGrid from '../node_modules/magic-grid/dist/magic-grid.esm.js'

const magicGrid = new MagicGrid({
  animate: true,
  container: '.magic-grid',
  gutter: 30,
  static: true,
  useMin: true,
})

magicGrid.listen()
