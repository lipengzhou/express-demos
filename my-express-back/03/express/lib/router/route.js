const flatten = require('array-flatten')
const Layer = require('./layer')
const methods = require('methods')

module.exports = Route

function Route() {
  this.stack = [
    // { method, handler }
  ]
  this.methods = {}
}

Route.prototype._handle_method = function (method) {
  const name = method.toLowerCase()
  return Boolean(this.methods[name])
}

Route.prototype.dispatch = function (req, res) {
  const method = req.method.toLowerCase()
  const stack = this.stack
  let index = 0
  const next = () => {
    const layer = stack[index++]
    if (layer.method && layer.method !== method) {
      return next()
    }
    layer.handle_request(req, res, next)
  }
  next()
}

methods.forEach(function (method) {
  Route.prototype[method] = function (...args) {
    const handlers = flatten(args)
    handlers.forEach(handler => {
      const layer = new Layer(method, handler)
      this.methods[method] = true
      this.stack.push(layer)
    })
  }
})
