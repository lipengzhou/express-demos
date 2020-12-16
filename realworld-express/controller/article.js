exports.showIndex = (req, res, next) => {
  try {
    console.log(req.session.user)
    res.render('index')
  } catch (err) {
    next(err)
  }
}

exports.showEditor = (req, res, next) => {
  try {
    res.render('editor')
  } catch (err) {
    next(err)
  }
}

exports.showArticle = (req, res, next) => {
  try {
    res.render('article')
  } catch (err) {
    next(err)
  }
}
