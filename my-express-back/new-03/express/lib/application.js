const http = require('http')

const Router = require('./router')

function Application () {
  this._router = new Router()
}

Application.prototype.get = function (path, handler) {
  this._router.get(path, handler)
}

Application.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    // 请求进来，直接交给路由系统处理
    this._router.handle(req, res)
  })
  server.listen(...args)
}

module.exports = Application
