const express = require('express')
const router = require('./router')

const app = express()

// 配置解析表单请求体：application/json
app.use(express.json())

// 解析表单请求体：application/x-www-form-urlencoded
app.use(express.urlencoded())

// 挂载路由
// app.use(router)

// 给路由限定访问前缀
app.use('/todos', router)

// 在所有的中间件之后挂载错误处理中间件
app.use((err, req, res, next) => {
  console.log('错误', err)
  res.status(500).json({
    error: err.message
  })
})

// 通常会在所有的路由之后配置处理 404 的内容
// 请求进来从上到下依次匹配
app.use((req, res, next) => {
  res.status(404).send('404 Not Found.')
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
