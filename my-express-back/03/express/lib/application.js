const http = require('http')
const methods = require('methods')
const Route = require('./router/route')

const app = {}

app.listen = function (...args) {
  const server = http.createServer(this)
  return server.listen(...args)
}

app.init = function () {
  // this.stack = []
  this.route = new Route()
}

app.handle = function (req, res, next) {
  this.route.dispatch(req, res, next)
}

// 2. 添加 GET、POST 等成员方法
methods.forEach(function(method) {
  app[method] = function(...args) {
    this.route[method](args)
  }
})

module.exports = app
