const http = require('http')
const Layer = require('./router/layer')
const methods = require('methods')

const app = {}

app.listen = function (...args) {
  const server = http.createServer(this)
  return server.listen(...args)
}

app.init = function () {
  this.stack = []
}

app.handle = function (req, res) {
  // 对 stack 中的函数进行遍历
  this.stack.forEach(layer => {
    layer.handle_request(req, res)
  })
}

// 2. 添加 GET、POST 等成员方法
methods.forEach(function(method) {
  app[method] = function(handler) {
    // 3. 创建路由对象
    const layer = new Layer(method, handler)

    // 4. 将路由对象添加到 stack 数组中
    this.stack.push(layer)
  }
})

module.exports = app
