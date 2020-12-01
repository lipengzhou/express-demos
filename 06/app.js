const express = require('express')

const app = express()

function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

var logStuff = [logOriginalUrl, logMethod]

app.get('/user/:id', logStuff, function (req, res, next) {
  res.send('User Info')
})

// app.get('/user/:id', function (req, res, next) {
//   // if the user ID is 0, skip to the next route
//   if (req.params.id === '0') next('route')
//   // otherwise pass the control to the next middleware function in this stack
//   else next()
// }, function (req, res, next) {
//   // send a regular response
//   res.send('regular')
// })

// // handler for the /user/:id path, which sends a special response
// app.get('/user/:id', function (req, res, next) {
//   res.send('special')
// })

// app.get('/user/:id',
//   function (req, res, next) {
//     console.log('ID:', req.params.id)
//     next()
//   }, function (req, res, next) {
//     res.send('User Info')
//     next()
//   })

// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', function (req, res, next) {
//   console.log(123)
//   // res.end(req.params.id)
// })

// app.use('/user/:id',
//   function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     // 真的就是下一个
//     next()
//   },
//   function (req, res, next) {
//     console.log('Request Type:', req.method)

//     // 这个 next 会脱离当前处理栈，往后查找匹配调用
//     next()
//   })

// app.get('/user/:id', (req, res) => {
//   res.send('get /user/:id')
// })

// 限定请求路径
// app.use('/user/:id', function (req, res, next) {
//   console.log('Request Type:', req.method)
//   next()
// })

// 不做任何限定的中间件
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

// 限定请求方法 + 请求路径
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.post
// app.put
// app.patch
// app.delete


app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
