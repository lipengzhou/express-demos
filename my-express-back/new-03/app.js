const express = require('./express')

const app = express()

app.get('/', (req, res) => {
  res.end('get /')
})

app.get('/login', (req, res) => {
  res.end('get login')
})

app.listen(3000, () => console.log('http://localhost:3000'))
