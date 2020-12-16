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
