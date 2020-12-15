/**
 * Express 渲染动态网页
 */

const express = require('express')
const fs = require('fs')
const template = require('art-template')
const path = require('path')

const app = express()

// view engine setup
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

app.get('/', (req, res) => {
  // 1、普通文本
  // res.send('Hello World!')

  // 2、HTML 格式文本
  // res.send('<h1>Hello World!</h1>')

  // 3、为了便于开发和维护，把文本内容放到单独文件
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     return res.status(404).send('404 Not Found.')
  //   }

  //   res.end(data)
  // })

  // 4、动态页面渲染
  // fs.readFile('./views/index.html', 'utf8', (err, data) => {
  //   if (err) {
  //     return res.status(404).send('404 Not Found.')
  //   }

  //   // 获取数据
  //   // 获取页面模板
  //   // 数据 + 模板 = 完整页面
  //   let str = ''
  //   todos.forEach(todo => {
  //     str += `<li>${todo.title}</li>`
  //   })

  //   // ！！！渲染这件事儿是在服务端完成的
  //   const ret = data.replace('^_^', str)

  //   // 把渲染结果发送给客户端
  //   res.end(ret)
  // })

  // 5、使用模板引擎
  // 1. 读取模板内容
  // fs.readFile('./views/index.html', 'utf8', (err, templateStr) => {
  //   if (err) {
  //     return res.status(404).send('404 Not Found.')
  //   }

  //   // 2. 获取数据

  //   // 3. 渲染这件事儿是在服务端完成的
  //   // 所谓的模板引擎就是在根据特定的规则进行字符串解析替换
  //   const ret = template.render(templateStr, { // 模板中使用的数据
  //     foo: 'bar',
  //     todos
  //   })

  //   // 把渲染结果发送给客户端
  //   res.end(ret)
  // })

  // 只要配置模板引擎，就可以使用 res.render 方法渲染页面了
  // 1、读模板文件 2、渲染 3、发送响应
  res.render('index', {
    foo: 'bar',
    todos
  })
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
