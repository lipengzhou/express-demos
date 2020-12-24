/**
 * - 实现顶层路由中间件功能
 */

const express = require('./express')

const app = express()

// app.get('/', (req, res, next) => {
//   console.log('/ 1')
//   next()
// }, (req, res, next) => {
//   console.log('/ 2')
//   next()
// }, (req, res, next) => {
//   console.log('/ 3')
//   next()
// })

app.get('/', (req, res, next) => {
  res.end('get /')
})

app.get('/foo', (req, res, next) => {
  console.log('foo 1')
  setTimeout(() => {
    next()
  }, 1000)
})

app.get('/foo', (req, res, next) => {
  console.log('foo 2')
  next()
})

app.get('/foo', (req, res, next) => {
  res.end('get /foo')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
