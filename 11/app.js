const express = require('express')
const fs = require('fs')
const template = require('art-template')
const path = require('path')
const util = require('util')

const app = express()

// 模板引擎相关配置
app.engine('html', require('express-art-template')) // 当渲染以 .art 结尾的资源文件的时候使用 express-art-template
app.set('view options', { // art-template 模板引擎配置
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views')) // 模板文件的存储目录
app.set('view engine', 'html') // 可以省略的模板文件后缀名

const todos = [
  { id: 1, title: '吃饭1' },
  { id: 2, title: '吃饭2' },
  { id: 3, title: '吃饭3' },
  { id: 4, title: '吃饭4' }
]

// Express 单独提供了一个内置中间件：托管静态资源

// 访问的时候不要加前缀
// app.use(express.static('./public'))

// 加上访问前缀
// app.use('/public', express.static('./public'))
// app.use('/foo', express.static('./public'))

// 路径最好是绝对路径
// app.use('/foo', express.static(
//   path.join(__dirname, './public'),
//   {
//     index: ['index.html']
//   }
// ))


// 资源托管的配置项
// app.use('/foo', express.static(
//   path.join(__dirname, './public'),
//   {
//     index: ['index.html']
//   }
// ))

// 托管多个静态资源目录
// 资源托管顺序问题
// app.use('/node_modules', express.static('./node_modules'))
// app.use('/public', express.static('./public'))

// 页面中的资源请求路径问题


app.use('/public', express.static('./public'))

app.get('/a/b/c', (req, res) => {
  res.render('index', {
    foo: 'bar',
    todos
  })
})

// app.get('/public/css/main.css', async (req, res) => {
//   const data = await util.promisify(fs.readFile)('./public/css/main.css')
//   res.end(data)
// })

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
