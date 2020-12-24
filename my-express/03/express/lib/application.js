const http = require('http')
const Router = require('./router')

function App () {
  this._router = new Router()
  // this.routes = []
}

App.prototype.get = function (path, handler) {
  this._router.get(path, handler)
}

App.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    this._router.handle(req, res)
  })
  server.listen(...args)
}

module.exports = App
