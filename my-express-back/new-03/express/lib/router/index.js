const url = require('url')

function Router () {
  this.stack = [] // 维护路由表
}

Router.prototype.get = function (path, handler) {
  this.stack.push({
    path,
    method: 'GET',
    handler
  })
}

Router.prototype.handle = function (req, res) {
  // 请求进来，遍历查找 route，执行 handler
  const { pathname } = url.parse(req.url)
  const method = req.method.toLocaleLowerCase()
  const route = this.stack.find(route => pathname === route.path && method === route.method.toLocaleLowerCase())
  if (!route) {
    return res.end('404 Not Found')
  }
  route.handler(req, res)
}

module.exports = Router
