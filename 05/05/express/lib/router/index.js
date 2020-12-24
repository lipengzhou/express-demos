const url = require('url')
const methods = require('methods')
const pathToRegexp = require('path-to-regexp/index')
const Layer = require('./layer')

function Router () {
  this.stack = []
}

methods.forEach(method => {
  Router.prototype[method] = function (path, handler) {
    const layer = new Layer(path, handler)
    layer.method = method
    this.stack.push(layer)
    // this.stack.push({
    //   path,
    //   method,
    //   handler
    // })
  }
})

Router.prototype.handle = function (req, res) {
  const method = req.method.toLowerCase()
  const { pathname } = url.parse(req.url)
  let index = 0
  const next = () => {
    if (index >= this.stack.length) {
      console.log(123)
      if (!res.writableEnded) {
        return res.end('404 Not Found.')
      }
      return
    }
    const layer = this.stack[index++]
    if (layer.method === method && layer.match(pathname)) {
      return layer.handleRequest(req, res, next)
    }
    next()
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
