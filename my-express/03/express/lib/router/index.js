const url = require('url')

function Router () {
  this.stack = []
}

Router.prototype.get = function (path, handler) {
  this.stack.push({
    path,
    method: 'get',
    handler
  })
}

Router.prototype.handle = function (req, res) {
  const { pathname } = url.parse(req.url)
  const method = req.method.toLowerCase()
  const route = this.stack.find(route => route.path === pathname && route.method === method)
  if (route) {
    return route.handler(req, res)
  }
  res.end('404 Not Found.')
}

module.exports = Router
