/**
 * - 实现处理不同的请求方法
 */

const express = require('./express')

const app = express()

app.get('/', (req, res, next) => {
  // res.end('get /')
  console.log('1')
  next()
})

app.get('/', (req, res, next) => {
  // res.end('get /')
  console.log('2')
  next()
})

app.get('/about', (req, res) => {
  res.end('get /about')
})

app.post('/about', (req, res) => {
  res.end('post /about')
})

app.get('/', (req, res, next) => {
  // res.end('get /')
  console.log('3')
  next()
})

app.get('/', (req, res, next) => {
  // res.end('get /')
  res.end('get /')
})

app.get('/1', (req, res, next) => {
  // res.end('1')
  next()
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
