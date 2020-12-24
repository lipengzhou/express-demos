const url = require('url')
const methods = require('methods')
const Layer = require('./layer')
const Route = require('./route')

function Router () {
  this.stack = []
}

methods.forEach(method => {
  Router.prototype[method] = function (path, handlers) {
    // console.log(handlers)
    const route = new Route()
    const layer = new Layer(path, route.dispatch.bind(route)) // route.dispatch 作为处理函数
    this.stack.push(layer)
    route[method](path, handlers)
  }
})

Router.prototype.handle = function (req, res) {
  // console.log('router handle')
  // const method = req.method.toLowerCase()
  const { pathname } = url.parse(req.url)
  console.log(pathname)
  let index = 0
  const next = () => {
    if (index >= this.stack.length) {
      if (!res.writableEnded) {
        return res.end('404 Not Found.')
      }
      return
    }
    const layer = this.stack[index++]
    if (layer.match(pathname)) {
      layer.handleRequest(req, res, next)
    } else {
      console.log('next')
      next()
    }
  }
  next()

  // const { pathname } = url.parse(req.url)
  // const method = req.method.toLowerCase()
  // const layer = this.stack.find(layer => {
  //   console.log(layer.match(pathname), layer.method === method)
  //   return layer.match(pathname) && layer.method === method
  // })
  // if (layer) {
  //   return layer.handleRequest(req, res)
  //   // return route.handler(req, res)
  // }
  // res.end('404 Not Found.')
}

module.exports = Router
