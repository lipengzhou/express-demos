const http = require('http')
const mixin = require('merge-descriptors')
const methods = require('methods')
const Layer = require('./router/layer')

module.exports = createApplication

function createApplication() {
  const app = function (req, res) {
    // 请求进来执行它
    app.handle(req, res)
    // res.end('Hello Express!')
  }
  mixin(app, proto, false)
  app.init()
  return app
}

const proto = {}

proto.listen = function (...args) {
  const server = http.createServer(this)
  return server.listen(...args)
}

proto.init = function () {
  this.handles = []
}

proto.handle = function (req, res) {
  // 对handles中的函数进行遍历
  for (let i = 0; i < this.handles.length; i++) {
    const layer = this.handles[i]
    layer.handle_request(req, res)
  }
}

// 2. 添加 GET、POST 等成员方法
methods.forEach(function(method) {
  proto[method] = function(fn) {
    // 3. 创建路由对象
    const layer = new Layer(method, fn)

    // 4. 将路由对象添加到 handles 数组中
    this.handles.push(layer)
  }
})
