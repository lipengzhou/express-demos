const express = require('./express')

const app = express()

app.get('/', (req, res, next) => {
  console.log('1')
  next()
}, (req, res, next) => {
  console.log('2')
  next()
}, (req, res, next) => {
  console.log('3')
  next()
})

app.get('/', (req, res) => {
  res.end('get /')
})

app.get('/login', (req, res) => {
  res.end('get /login')
})

app.post('/', (req, res, next) => {
  console.log('post / 1')
  next()
})

app.post('/', (req, res) => {
  res.end('post / 2')
})

app.listen(3000, () => console.log('http://localhost:3000'))
