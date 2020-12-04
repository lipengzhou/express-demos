const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

require('./model')

const app = express()

app.use(morgan('tiny'))

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
