/**
 * - 实现处理不同的请求方法
 */

const express = require('./express')

const app = express()

app.get('/', (req, res, next) => {
  console.log('/ 1')
  next()
}, (req, res, next) => {
  console.log('/ 2')
  next()
}, (req, res, next) => {
  console.log('/ 3')
  next()
})

app.get('/foo', (req, res, next) => {
  console.log('foo 1')
  next()
})

app.get('/foo', (req, res, next) => {
  console.log('foo 2')
  next()
}, (req, res, next) => {
  console.log('foo 3')
  next()
})

app.get('/foo', (req, res, next) => {
  res.end('get foo')
})

app.get('/', (req, res, next) => {
  res.end('get /')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
