const url = require('url')
const Layer = require('./layer')
const Route = require('./route')

function Router () {
  this.stack = [
    // Layer { '/': Route }
  ]
}

Router.prototype.route = function (path) {
  // 产生 route
  const route = new Route()

  // 产生 layer，让 layer 和 route 进行关联
  const layer = new Layer(path, route.dispatch.bind(route))

  // 每个路由都具备一个 route 属性，稍后路径匹配到会调用 route 中的每一层
  layer.route = route

  this.stack.push(layer)

  return route
}

Router.prototype.get = function (path, handlers) {
  // console.log('router get')
  // 1. 用户调用 get 时，需要保存成一个 layer 放到栈中
  // 2. 产生一个 Route 实例和当前的 layer 创造关系
  // 3. 将 route 的 dispatch 方法存到 layer 上

  const route = this.route(path)

  // 让 route 记录用户传入的 handler，并且标记这个 handler 是什么方法
  route.get(handlers)
}

Router.prototype.handle = function (req, res) {
  // 1. 取出路由系统中存放的 Layer 依次迭代
  const { pathname } = url.parse(req.url)
  let index = 0
  const next = () => {
    if (index >= this.stack.length) {
      return res.end('404 Not Found.')
    }

    const layer = this.stack[index++]

    if (layer.path === pathname) {
      // 路径匹配到了，让 layer 上对应的 dispatch 执行
      layer.handler(req, res, next) // 将遍历路由系统中下一层的方法传入
    } else {
      // 继续匹配下一个
      next()
    }
  }

  next()
}

module.exports = Router
