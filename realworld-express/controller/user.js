const { User } = require('../model')

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
    // 1. 数据验证
    // 2. 验证通过，创建新的用户
    const user = new User(req.body.user)
    await user.save()

    // 3. 保持登陆状态
    req.session.user = user

    // 4. 跳转到首页
    res.status(200).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

exports.login = async (req, res) => {
  try {
    const user = req.user
    // 3. 保持登陆状态
    req.session.user = user

    // 4. 跳转到首页
    res.status(200).json({
      user
    })
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

exports.logout = async (req, res) => {
  try {
    // 清除用户登录状态
    req.session.user = null
    // 跳转到首页
    res.redirect('/')
  } catch (err) {
    next(err)
  }
}
