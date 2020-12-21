const { Article } = require("../model")

exports.showIndex = async (req, res, next) => {
  try {
    const page = req.query.page
      ? Number.parseInt(req.query.page)
      : 1
    const pageSize = 10

    const articles = await Article.find()
      .skip((page - 1) * pageSize) // 跳过多少
      .limit(pageSize) // 取多少

    const articlesCount = await Article.count()

    res.render('index', {
      articles,
      page,
      pageSize,
      articlesCount,
      totalPage: Math.ceil(articlesCount / pageSize)
    })
  } catch (err) {
    next(err)
  }
}

exports.showEditor = async (req, res, next) => {
  try {
    res.render('editor')
  } catch (err) {
    next(err)
  }
}

exports.showArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId).populate('author')
    res.render('article', {
      article
    })
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
