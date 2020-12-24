function Layer(method, handler) {
  this.method = method
  this.handler = handler
}

Layer.prototype.handle_method = function (req) {
  return this.method.toLowerCase() === req.method.toLowerCase()
}

Layer.prototype.handle_request = function (req, res, next) {
  if (!this.handle_method(req)) return
  const handler = this.handler
  try {
    handler(req, res, next)
  } catch (err) {
    throw err
  }
}

module.exports = Layer
