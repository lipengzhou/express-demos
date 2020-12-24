const http = require('http')
const url = require('url')

function Application () {
  this.routes = [
    // { path: '', method: '', handler: xxx }
  ]
}

Application.prototype.get = function (path, handler) {
  this.routes.push({
    path,
    method: 'GET',
    handler
  })
}

Application.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    // 请求进来，遍历查找 route，执行 handler
    const { pathname } = url.parse(req.url)
    const method = req.method.toLocaleLowerCase()
    const route = this.routes.find(route => pathname === route.path && method === route.method.toLocaleLowerCase())
    if (!route) {
      return res.end('404 Not Found')
    }
    route.handler(req, res)
  })
  server.listen(...args)
}

module.exports = Application
