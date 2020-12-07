const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/error-handler')

require('./validators/index')

// 初始化数据库
require('./model')

const PORT = process.env.PORT || 3000

const app = express()

// 开发日志
app.use(morgan('tiny'))

// 解析请求体
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// 设置 CORS 跨域
app.use(cors())

// 挂载路由
app.use('/api', router)

// 全局错误处理
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
