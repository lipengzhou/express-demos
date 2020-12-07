const mongoose = require('mongoose')

module.exports = (options = {}) => {
  return (err, req, res, next) => {
    let status = 500
    if (err instanceof mongoose.Error.ValidationError) {
      status = 422
    }
    res.status(status).json(err)
  }
}
