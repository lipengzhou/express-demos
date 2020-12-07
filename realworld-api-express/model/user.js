const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('blueimp-md5')
// const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema(Object.assign(baseModel, {
  email: {
    type: String,
    required: true,
    // unique: true
  },
  username: {
    type: String,
    unique: true,
    // required: true
    // validate: {
    //   async validator (value) {
    //     const User = this.model(this.constructor.modelName)
    //     const ret = await User.findOne({
    //       username: value
    //     })
    //     return !ret
    //   },
    //   message: props => `Path ${props.value} already exist.`
    // }
  },
  password: {
    type: String,
    required: true,
    select: false,
    set: value => md5(value)
  },
  bio: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  }
}))

// userSchema.plugin(uniqueValidator)

module.exports = userSchema
