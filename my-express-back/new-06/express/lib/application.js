const http = require('http')
const methods = require('methods')

const Router = require('./router')

function Application () {

  // 默认就在创建时就会生成一个路由系统
  // this._router = new Router()
}

Application.prototype.lazyRoute = function () {
  if (!this._router) {
    this._router = new Router()
  }
}

methods.forEach(method => {
  Application.prototype[method] = function (path, ...handler) {
    // 当添加路由的时候才创建路由实例
    this.lazyRoute()

    this._router[method](path, handler)
  }
})

Application.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    this.lazyRoute()
    
    // 请求进来，直接交给路由系统处理
    this._router.handle(req, res)
  })
  server.listen(...args)
}

module.exports = Application
