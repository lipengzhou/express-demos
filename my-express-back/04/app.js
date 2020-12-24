/**
 * 引入path，即app.get(‘user’, handler)
 * 不同path由不同的函数来处理
 */

const express = require('./express')

const app = express()

app.get('/foo', function (req, res, next) {
  res.end('Welcome to GET /foo')
})

app.get('/bar', function (req, res, next) {
  res.end('Welcome to GET /bar')
})

app.post('/foo', function (req, res, next) {
  res.end('Welcome to POST /foo')
})

app.listen(3000)
