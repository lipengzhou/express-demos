/**
 * - 实现更强大的路由路径匹配模式
 */

const express = require('./express')

const app = express()

app.get('/', (req, res) => {
  res.end('get /')
})

// app.get('/ab?cd', function (req, res) {
//   res.end('ab?cd')
// })

// app.get('/ab+cd', function (req, res) {
//   res.end('ab+cd')
// })

app.get('/ab*cd', function (req, res) {
  res.end('ab*cd')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  console.log(req.params)
  res.end('/users/:userId/books/:bookId')
})

// app.get('/ab(cd)?e', function (req, res) {
//   res.end('ab(cd)?e')
// })

// app.get(/a/, function (req, res) {
//   res.end('/a/')
// })

// app.get(/.*fly$/, function (req, res) {
//   res.end('/.*fly$/')
// })

// app.get('/users/:userId/books/:bookId', function (req, res) {
//   res.end(req.params)
// })

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
