/**
 * 需求：
 *  - 可以给一个方法添加多个中间件
 *  - 引入 next 参数
 */

const express = require('./express')

const app = express()

app.get(function (req, res, next) {
  req.user = {
    name: 'foo'
  }
  next()
})

app.get(function (req, res, next) {
  req.article = {
    title: 'bar'
  }
  next()
}, function (req, res, next) {
  res.end(`User name is ${req.user.name} and Artitle title is ${req.article.title}`)
})

app.listen(3000, () => console.log('http://localhost:3000'))
