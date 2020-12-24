const pathToRegexp = require('path-to-regexp/index')

function Layer(path, handler) {
  this.path = path
  this.handler = handler
  this.keys = []
  this.regexp = pathToRegexp(path, this.keys, {})
}

Layer.prototype.handleRequest = function (req, res, next) {
  this.handler(req, res, next)
}

Layer.prototype.match = function (pathname) {
  const match = this.regexp.exec(pathname)

  if (match) {
    return true
  }

  return false
}

module.exports = Layer
