const Layer = require('./layer')

function Route() {
  this.stack = [
    // Layer { Route: [], dispatch }
  ]
}

/**
 * 从栈中拿出对应的 handler 依次执行
 */
Route.prototype.dispatch = function () {}

/**
 *
 */
Route.prototype.get = function (handlers) {
  handlers.forEach(handler => {
    const layer = new Layer('', handler)
    layer.method = 'get'
    this.stack.push(layer)
  })
}

module.exports = Route
