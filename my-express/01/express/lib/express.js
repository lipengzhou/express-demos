const http = require('http')
const mixin = require('merge-descriptors')

module.exports = createApplication

function createApplication() {
  const app = function (req, res) {
    res.end('Hello Express!')
  }
  mixin(app, proto, false)
  return app
}

const proto = {}

proto.listen = function (...args) {
  const server = http.createServer(this)
  return server.listen(...args)
}
