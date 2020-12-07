const express = require('express')
const userCtrl = require('../controller/user')
const articleCtrl = require('../controller/article')
const tagCtrl = require('../controller/tag')
const { body } = require('express-validator')

const router = express.Router()

router.use('/users', express.Router()
  .post('/', userCtrl.register) // 用户注册
  .post('/login', userCtrl.login) // 用户登录
)

router.use('/profiles', express.Router()
  .get('/:username', userCtrl.getProfile) // 获取用户资料
  .post('/:username/follow', userCtrl.followUser) // 关注用户
  .delete('/:username/follow', userCtrl.unfollowUser) // 取消关注
)

router.use('/articles', express.Router()
  .get('/', articleCtrl.getArticles) // 获取文章列表
  .get('/feed', articleCtrl.getFeedArticles) // 获取关注用户的文章列表
  .get('/:slug', articleCtrl.getArticle) // 根据 slug 获取指定文章
  .post('/', articleCtrl.createArticle) // 创建文章
  .put('/:slug', articleCtrl.updateArticle) // 更新文章
  .delete('/:slug', articleCtrl.deleteArticle) // 删除文章
  .post('/:slug/comments', articleCtrl.createArticleComment) // 添加文章评论
  .get('/:slug/comments', articleCtrl.getArticleComments) // 获取文章评论列表
  .delete('/:slug/comments/:id', articleCtrl.deleteArticleComment) // 删除评论
  .post('/:slug/favorite', articleCtrl.favoriteArticle) // 文章点赞
  .delete('/:slug/favorite', articleCtrl.unfavoriteArticle) // 删除文章点赞
)

router.use('/tags', express.Router()
  .get('/', tagCtrl.getTags) // 获取标签列表
)

module.exports = router
