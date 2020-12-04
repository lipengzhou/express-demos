const mongoose = require('mongoose')

const kittySchema = new mongoose.Schema({
  name: String
})

module.exports = kittySchema
