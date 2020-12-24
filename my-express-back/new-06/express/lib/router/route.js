const Layer = require('./layer')
const methods = require('methods')

function Route() {
  this.stack = [
    // Layer { Route: [], dispatch }
  ]
}

/**
 * 从栈中拿出对应的 handler 依次执行
 */
Route.prototype.dispatch = function (req, res, out) {
  let index = 0
  const next = () => {
    if (index >= this.stack.length) return out()
    const layer = this.stack[index++]
    if (layer.method === req.method.toLowerCase()) {
      layer.handleRequest(req, res, next)
    } else {
      next()
    }
  }
  next()
}

methods.forEach(method => {
  Route.prototype[method] = function (handlers) {
    handlers.forEach(handler => {
      const layer = new Layer('', handler)
      layer.method = method
      this.stack.push(layer)
    })
  }
})

/**
 *
 */
// Route.prototype.get = function (handlers) {
//   handlers.forEach(handler => {
//     const layer = new Layer('', handler)
//     layer.method = 'get'
//     this.stack.push(layer)
//   })
// }

module.exports = Route
