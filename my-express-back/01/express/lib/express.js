const http = require('http')

module.exports = createApplication

function createApplication() {
  const app = function (req, res) {
    res.end('Hello Express!')
  }
  // 扩展 app
  Object.assign(app, proto)
  return app
}

const proto = {}

proto.listen = function (...args) {
  const server = http.createServer(this)
  return server.listen(...args)
}
