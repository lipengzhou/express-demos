exports.getArticles = async (req, res, next) => {
  try {
    res.send('getArticles')
  } catch (err) {
    next(err)
  }
}

exports.getFeedArticles = async (req, res, next) => {
  try {
    res.send('getFeedArticles')
  } catch (err) {
    next(err)
  }
}

exports.getArticle = async (req, res, next) => {
  try {
    res.send('getArticle')
  } catch (err) {
    next(err)
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    res.send('createArticle')
  } catch (err) {
    next(err)
  }
}

exports.updateArticle = async (req, res, next) => {
  try {
    res.send('updateArticle')
  } catch (err) {
    next(err)
  }
}

exports.deleteArticle = async (req, res, next) => {
  try {
    res.send('deleteArticle')
  } catch (err) {
    next(err)
  }
}

exports.createArticleComment = async (req, res, next) => {
  try {
    res.send('createArticleComment')
  } catch (err) {
    next(err)
  }
}

exports.getArticleComments = async (req, res, next) => {
  try {
    res.send('getArticleComments')
  } catch (err) {
    next(err)
  }
}

exports.deleteArticleComment = async (req, res, next) => {
  try {
    res.send('deleteArticleComment')
  } catch (err) {
    next(err)
  }
}

exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send('favoriteArticle')
  } catch (err) {
    next(err)
  }
}

exports.unfavoriteArticle = async (req, res, next) => {
  try {
    res.send('unfavoriteArticle')
  } catch (err) {
    next(err)
  }
}
