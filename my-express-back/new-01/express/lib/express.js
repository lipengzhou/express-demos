const http = require('http')
const url = require('url')

const routes = [
  // { path: '', method: '', handler: xxx }
]

function createApplication () {
  return {
    get (path, handler) {
      routes.push({
        path,
        method: 'GET',
        handler
      })
    },
    listen (...args) {
      const server = http.createServer((req, res) => {
        // 请求进来，遍历查找 route，执行 handler
        const { pathname } = url.parse(req.url)
        const method = req.method.toLocaleLowerCase()
        const route = routes.find(route => pathname === route.path && method === route.method.toLocaleLowerCase())
        if (!route) {
          return res.end('404 Not Found')
        }
        route.handler(req, res)
      })
      server.listen(...args)
    }
  }
}

module.exports = createApplication
