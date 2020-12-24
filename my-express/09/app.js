/**
 * - 实现 use 方法中间件
 */

const express = require('./express')

const app = express()

// 不验证请求方法和请求路径
// app.use(function (req, res, next) {
//   res.end('hello')
// })

// 匹配 /foo 开头的
// /foo/a、/foo/a/b/c
// /fooa、/fooabc 不能
// app.use('/foo', function (req, res, next) {
//   res.end('foo')
// })

// app.use('/', function (req, res, next) {
//   res.end('hello')
// })

app.use('/foo', function (req, res, next) {
  console.log(1)
  next()
}, function (req, res, next) {
  console.log(2)
  next()
}, (req, res, next) => {
  res.end('hello')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
