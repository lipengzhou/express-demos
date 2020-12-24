const url = require('url')
const methods = require('methods')
const Layer = require('./layer')
const Route = require('./route')
const { type } = require('os')

function Router () {
  this.stack = []
}

methods.forEach(method => {
  Router.prototype[method] = function (path, handlers) {
    const route = new Route()
    const layer = new Layer(path, route.dispatch.bind(route))
    layer.route = route
    this.stack.push(layer)
    route[method](path, handlers)
  }
})

Router.prototype.handle = function (req, res) {
  const { pathname } = url.parse(req.url)

  let index = 0
  const next = () => {
    if (index >= this.stack.length) {
      return res.end(`Can not get ${pathname}`)
    }
    
    const layer = this.stack[index++]
    const match = layer.match(pathname)
    if (match) {
      req.params = req.params || {}
      Object.assign(req.params, layer.params)
    }
    // 顶层只判定请求路径，内层判定请求方法
    if (match) {
      // 顶层这里调用的 handler 其实就是 dispatch 函数
      return layer.handler(req, res, next)
    }
    next()
  }

  next()
  
  // const layer = this.stack.find(layer => {
  //   // const keys = []
  //   // const regexp = pathRegexp(layer.path, keys, {})
  //   const match = layer.match(pathname)
  //   if (match) {
  //     req.params = req.params || {}
  //     Object.assign(req.params, layer.params)
  //   }
  //   return match && layer.method === method
  // })
  // if (layer) {
  //   return layer.handler(req, res)
  // }
  // res.end('404 Not Found.')
}

Router.prototype.use = function (path, handlers) {
  if (typeof path === 'function') {
    handlers.unshift(path) // 处理函数
    path = '/' // 任何路径都以它开头的
  }
  handlers.forEach(handler => {
    const layer = new Layer(path, handler)
    layer.isUseMiddleware = true
    this.stack.push(layer)
  })
}

module.exports = Router
