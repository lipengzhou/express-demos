const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')
const noAuth = require('../middleware/no-auth')

const router = express.Router()

router.get('/login', noAuth, userCtrl.showLogin)

router.post('/login', noAuth, userValidator.login, userCtrl.login)

router.get('/register', noAuth, userCtrl.showRegister)

router.get('/logout', userCtrl.logout)

router.post('/register', userValidator.register, userCtrl.register)

router.get('/settings', auth, userCtrl.showSettings)

router.get('/profile/:username', userCtrl.showProfile)

router.get('/profile/:username/favorites', userCtrl.showProfile)

module.exports = router
