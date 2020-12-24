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

app.listen(3000, () => console.log('http://localhost:3000'))
