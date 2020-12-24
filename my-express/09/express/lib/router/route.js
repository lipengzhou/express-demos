const methods = require('methods')
const Layer = require('./layer')

function Route () {
  this.stack = [
    // { path, method, handler }
  ]
}

// 遍历执行当前路由对象中所有的处理函数
Route.prototype.dispatch = function (req, res, out) {
  // 遍历内层的 stack
  let index = 0
  const method = req.method.toLowerCase()
  const next = () => {
    if (index >= this.stack.length) return out()
    const layer = this.stack[index++]
    if (layer.method === method) {
      return layer.handler(req, res, next)
    }
    next()
  }
  next()
}

methods.forEach(method => {
  Route.prototype[method] = function (path, handlers) {
    handlers.forEach(handler => {
      const layer = new Layer(path, handler)
      layer.method = method
      this.stack.push(layer)
    })
  }
})

module.exports = Route
