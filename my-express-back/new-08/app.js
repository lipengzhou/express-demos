const express = require('./express')

const app = express()

app.use('/a', (req, res, next) => {
  console.log(1)
  next()
})

app.get('/a', (req, res, next) => {
  res.end('a')
  // next()
})

app.use((req, res, next) => {
  console.log(2)
  next()
})

app.use((req, res, next) => {
  console.log(3)
  // res.end('end')
  next()
})

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
  res.end('4')
})

app.get('/login', (req, res) => {
  res.end('get /login')
})

app.post('/', (req, res, next) => {
  console.log('post / 1')
  next()
})

app.post('/', (req, res, next) => {
  res.end('post / 2')
  next()
})

app.listen(3000, () => console.log('http://localhost:3000'))
