const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/random.text', function (req, res) {
  res.send('random.text')
})

// app.get('/users/:id', (req, res) => {
//   console.log(req.params.id)
//   res.send('get /users/:id')
// })

app.get('/users/:userId(\\d+)', (req, res) => {
  res.send('/users/:userId(\\d+)')
})

// app.get('/users/:id/edit/:id/abc', (req, res) => {
//   console.log(req.params.id)
//   res.send('get /users/:id/edit')
// })

// app.get(/.*fly$/, function (req, res) {
//   res.send('/.*fly$/')
// })

// app.get(/a/, function (req, res) {
//   res.send('/a/')
// })

// app.get('/ab(cd)?e', function (req, res) {
//   res.send('ab(cd)?e')
// })

// app.get('/ab?cd', function (req, res) {
//   res.send('ab?cd')
// })

// app.get('/ab*cd', function (req, res) {
//   res.send('ab*cd')
// })

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
