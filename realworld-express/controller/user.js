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
    res.render('login')
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res) => {
  try {
    console.log(req.body)
    if (!req.body.email) {
      return res.render('login', {
        errors: ['邮箱不能为空']
      })
      // return res.send('邮箱不能为空')
    }
    res.send('验证通过')
    // res.send('post register')
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
