const path = require('path')
const express = require('express')
const morgan = require('morgan')
const router = require('./router')
const errorhandler = require('errorhandler')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const { sessionSecret } = require('./config/config.default')
const mongoose = require('mongoose')
require('./model')

const app = express()

// 配置使用 Session 中间件
//    存储 Session：1、 生成 Session ID 2、存储数据
//      req.session.xxx = xxx
//    获取 Session：1、根据 Session ID 获取 Session 容器中的数据
//      req.session.xxx
// 注意：默认数据存储到内存中
app.use(session({
  secret: sessionSecret, // 签发 Session id 的秘钥
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 过期时间，单位是毫秒
    // secure: true // 只有 HTTPS 协作才会收发 Cookie
  }, // 保存 Session id 的 Cookie 设置
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }) // 将数据持久化到 MongoDB 数据库中
}))

// 确保挂载到 Session 初始化配置后
app.use((req, res, next) => {
  // 统一给模板添加数据
  app.locals.sessionUser = req.session.user
  next()
})

// 静态资源托管
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

// 模板引擎相关配置
app.engine('html', require('express-art-template')) // 当渲染以 .art 结尾的资源文件的时候使用 express-art-template
app.set('view options', { // art-template 模板引擎配置
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views')) // 模板文件的存储目录
app.set('view engine', 'html') // 可以省略的模板文件后缀名

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

const PORT = process.env.PORT || 3000

// 挂载路由
app.use(router)

// 挂载统一处理服务端错误中间件
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
