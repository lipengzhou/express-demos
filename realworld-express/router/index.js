const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/login', (req, res) => {
  res.render('login', {
    isLogin: true
  })
})

router.get('/register', (req, res) => {
  res.render('login')
})

router.get('/settings', (req, res) => {
  res.render('settings')
})

router.get('/editor', (req, res) => {
  res.render('editor')
})

router.get('/editor/:articleId', (req, res) => {
  res.render('editor')
})

router.get('/article/:articleId', (req, res) => {
  res.render('article')
})

router.get('/profile/:username', (req, res) => {
  res.render('profile')
})

router.get('/profile/:username/favorites', (req, res) => {
  res.render('profile')
})

module.exports = router
