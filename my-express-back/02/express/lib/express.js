const proto = require('./application')

module.exports = createApplication

function createApplication() {
  const app = function (req, res) {
    // 请求进来执行它
    app.handle(req, res)
    // res.end('Hello Express!')
  }
  Object.assign(app, proto)
  app.init()
  return app
}
