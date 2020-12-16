exports.showLogin = async (req, res, next) => {
  try {
    res.render('login', {
      isLogin: true
    })
  } catch (err) {
    next(err)
  }
}

exports.showRegister = async (req, res) => {
  try {
    res.render('login', {
      foo: 'server foo'
    })
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res) => {
  try {
    console.log(req.body)
    // 1. 数据验证
    // 2. 验证通过，创建新的用户
    // 3. 保持登陆状态
    // 4. 跳转到首页
    res.send('post register')
  } catch (err) {
    next(err)
  }
}

exports.showSettings = async (req, res) => {
  try {
    res.render('settings')
  } catch (err) {
    next(err)
  }
}

exports.showProfile = async (req, res) => {
  try {
    res.render('profile')
  } catch (err) {
    next(err)
  }
}
