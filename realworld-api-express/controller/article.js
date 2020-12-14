const { Article, User } = require('../model')

// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    const {
      limit = 20,
      offset = 0,
      tag,
      author
    } = req.query

    const filter = {}

    if (tag) {
      filter.tagList = tag
    }
    
    if (author) {
      const user = await User.findOne({
        username: author
      })
      filter.author = user ? user._id : null
    }

    const artilces = await Article.find(filter)
      .populate('author')
      .skip(Number.parseInt(offset)) // 跳过多少条
      .limit(Number.parseInt(limit)) // 取多少条
      .sort({
        // -1 倒叙，1 升序
        createdAt: -1
      })

    const articlesCount = await Article.countDocuments()

    res.status(200).json({
      artilces,
      articlesCount
    })
  } catch (err) {
    next(err)
  }
}

// 获取用户关注的作者文章列表
exports.getFeedArticles = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getFeedArticles')
  } catch (err) {
    next(err)
  }
}

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId).populate('author')
    if (!article) {
      return res.status(404).end()
    }
    res.status(200).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    // 处理请求
    const article = new Article(req.body.article)
    article.author = req.user._id
    article.populate('author').execPopulate()
    await article.save()
    res.status(201).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article
    const bodyArticle = req.body.article
    article.title = bodyArticle.title || article.title
    article.description = bodyArticle.description || article.description
    article.body = bodyArticle.body || article.body
    await article.save()
    res.status(200).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    const article = req.article
    await article.remove()
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

// 添加文章评论
exports.createArticleComment = async (req, res, next) => {
  try {
    // 处理请求
    res.send('createArticleComment')
  } catch (err) {
    next(err)
  }
}

// 获取文章评论列表
exports.getArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getArticleComments')
  } catch (err) {
    next(err)
  }
}

// 删除文章评论
exports.deleteArticleComment = async (req, res, next) => {
  try {
    // 处理请求
    res.send('deleteArticleComment')
  } catch (err) {
    next(err)
  }
}

// 文章点赞
exports.favoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('favoriteArticle')
  } catch (err) {
    next(err)
  }
}

// 取消文章点赞
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('unfavoriteArticle')
  } catch (err) {
    next(err)
  }
}
