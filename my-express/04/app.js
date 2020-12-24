/**
 * - 实现处理不同的请求方法
 */

const express = require('./express')

const app = express()

app.get('/', (req, res) => {
  res.end('get /')
})

app.get('/about', (req, res) => {
  res.end('get /about')
})

app.post('/about', (req, res) => {
  res.end('post /about')
})

app.patch('/about', (req, res) => {
  res.end('patch /about')
})

app.delete('/about', (req, res) => {
  res.end('delete /about')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
