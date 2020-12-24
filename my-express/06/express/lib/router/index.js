const url = require('url')
const methods = require('methods')
const Layer = require('./layer')

function Router () {
  this.stack = []
}

methods.forEach(method => {
  Router.prototype[method] = function (path, handler) {
    const layer = new Layer(path, handler)
    layer.method = method
    this.stack.push(layer)
  }
})

Router.prototype.handle = function (req, res) {
  const { pathname } = url.parse(req.url)
  const method = req.method.toLowerCase()
  
  const route = this.stack.find(layer => {
    // const keys = []
    // const regexp = pathRegexp(route.path, keys, {})
    const match = layer.match(pathname)
    if (match) {
      req.params = req.params || {}
      Object.assign(req.params, layer.params)
    }
    return match && layer.method === method
  })
  if (route) {
    return route.handler(req, res)
  }
  res.end('404 Not Found.')
}

module.exports = Router
