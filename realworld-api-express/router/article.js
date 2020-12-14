const express = require('express')
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')

const router = express.Router()

// 获取文章列表
router.get('/', articleCtrl.getArticles)

// 获取用户关注的作者文章列表
router.get('/feed', articleCtrl.getFeedArticles)

// 获取文章
router.get('/:articleId', articleValidator.getArticle, articleCtrl.getArticle)

// 创建文章
router.post('/', auth, articleValidator.createArticle, articleCtrl.createArticle)

// 更新文章
router.put('/:articleId', auth, articleValidator.updateArticle, articleCtrl.updateArticle)

// 删除文章
router.delete('/:articleId', auth, articleValidator.deleteArticle, articleCtrl.deleteArticle)

// 添加文章评论
router.post('/:articleId/comments', articleCtrl.createArticleComment)

// 获取文章评论列表
router.get('/:articleId/comments', articleCtrl.getArticleComments)

// 删除文章评论
router.delete('/:articleId/comments/:id', articleCtrl.deleteArticleComment)

// 文章点赞
router.post('/:articleId/favorite', articleCtrl.favoriteArticle)

// 取消文章点赞
router.delete('/:articleId/favorite', articleCtrl.unfavoriteArticle)

module.exports = router
