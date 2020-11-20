import jsonServer from 'json-server'
import db from './db.json'
import routes from './routes.json'

const middlewares = jsonServer.defaults()
const rewriter = jsonServer.rewriter(routes)
const router = jsonServer.router(db)
const server = jsonServer.create()

server.use(middlewares)
server.use(rewriter) // Should occur before router.
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running.')
})
