const mongoose = require('mongoose')
const baseModel = require('./base-model')

const articleSchema = new mongoose.Schema(Object.assign(baseModel, {
  email: {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    body: {
      type: String,
      required: true
    },
    tagList: {
      type: [String],
      default: null
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
}))

module.exports = articleSchema
