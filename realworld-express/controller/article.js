const { Article } = require("../model")

exports.showIndex = (req, res, next) => {
  try {
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

exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article({
      ...req.body.article,
      author: req.session.user._id
    })
    await article.save()
    res.status(201).json({
      article
    })
  } catch (err) {
    next(err)
  }
}
