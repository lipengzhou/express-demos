const proto = require('./application')

module.exports = createApplication

function createApplication() {
  const app = function (req, res, next) {
    // 请求进来执行它
    app.handle(req, res, next)
    // res.end('Hello Express!')
  }
  Object.assign(app, proto)
  app.init()
  return app
}
