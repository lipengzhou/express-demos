const path = require('path')
const express = require('express')
const morgan = require('morgan')
const router = require('./router')
const errorhandler = require('errorhandler')
require('./model')

const app = express()

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
