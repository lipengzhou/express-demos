const http = require('http')
const url = require('url')

function App () {
  this.routes = []
}

App.prototype.get = function (path, handler) {
  this.routes.push({
    path,
    method: 'get',
    handler
  })
}

App.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    const method = req.method.toLowerCase()
    const route = this.routes.find(route => route.path === pathname && route.method === method)
    if (route) {
      return route.handler(req, res)
    }
    res.end('404 Not Found.')
  })
  server.listen(...args)
}

module.exports = App
