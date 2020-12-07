const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://39.105.28.5:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', err => {
  console.error('连接失败', err)
})

db.once('open', function() {
  console.log('连接数据库成功!')
})

module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}
