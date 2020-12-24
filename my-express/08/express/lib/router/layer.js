const pathRegexp = require('path-to-regexp')

function Layer (path, handler) {
  this.path = path
  this.handler = handler
  this.keys = []
  this.regexp = pathRegexp(path, this.keys, {})
  this.params = {}
}

Layer.prototype.match = function (pathname) {
  const match = this.regexp.exec(pathname)
  if (match) {
    this.keys.forEach((key, index) => {
      this.params[key.name] = match[index + 1]
    })
    return true
  }

  return false
}

module.exports = Layer
