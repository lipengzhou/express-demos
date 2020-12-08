const express = require('express')

const router = express.Router()

// 获取文章列表
router.get('/', async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /')
  } catch (err) {
    next(err)
  }
})

// 获取用户关注的作者文章列表
router.get('/feed', async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /feed')
  } catch (err) {
    next(err)
  }
})

// 获取文章
router.get('/:slug', async (req, res, next) => {
  try {
    // 处理请求
    res.send('获取文章')
  } catch (err) {
    next(err)
  }
})

// 获取文章
router.post('/', async (req, res, next) => {
  try {
    // 处理请求
    res.send('创建文章')
  } catch (err) {
    next(err)
  }
})

// 更新文章
router.put('/:slug', async (req, res, next) => {
  try {
    // 处理请求
    res.send('更新文章')
  } catch (err) {
    next(err)
  }
})

// 删除文章
router.put('/:slug', async (req, res, next) => {
  try {
    // 处理请求
    res.send('删除文章')
  } catch (err) {
    next(err)
  }
})

// 添加文章评论
router.put('/:slug/comments', async (req, res, next) => {
  try {
    // 处理请求
    res.send('添加文章评论')
  } catch (err) {
    next(err)
  }
})

// 获取文章评论列表
router.get('/:slug/comments', async (req, res, next) => {
  try {
    // 处理请求
    res.send('获取文章评论列表')
  } catch (err) {
    next(err)
  }
})

// 删除文章评论
router.delete('/:slug/comments/:id', async (req, res, next) => {
  try {
    // 处理请求
    res.send('删除文章评论')
  } catch (err) {
    next(err)
  }
})

// 文章点赞
router.post('/:slug/favorite', async (req, res, next) => {
  try {
    // 处理请求
    res.send('文章点赞')
  } catch (err) {
    next(err)
  }
})

// 取消文章点赞
router.delete('/:slug/favorite', async (req, res, next) => {
  try {
    // 处理请求
    res.send('取消文章点赞')
  } catch (err) {
    next(err)
  }
})

module.exports = router
