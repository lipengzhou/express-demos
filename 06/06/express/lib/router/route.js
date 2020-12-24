const Layer = require('./layer')
const methods = require('methods')

function Route () {
  this.stack = []
}

Route.prototype.dispatch = function (req, res, out) {
  // console.log('route dispatch')
  const method = req.method.toLowerCase()
  let index = 0
  const next = () => {
    if (index >= this.stack.length) return out()
    const layer = this.stack[index++]
    if (layer.method === method) {
      return layer.handleRequest(req, res, next)
    }
    next()
  }
  next()
}

methods.forEach(method => {
  Route.prototype[method] = function (path, handlers) {
    // console.log(handlers)
    handlers.forEach(handler => {
      const layer = new Layer(path, handler)
      layer.method = method
      this.stack.push(layer)
    })
  }
})

module.exports = Route
