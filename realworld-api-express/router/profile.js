const express = require('express')
const userCtrl = require('../controller/user')

const router = express.Router()

// 获取用户资料
router.get('/:username', userCtrl.getUserProfile)

// 关注用户
router.post('/:username/follow', userCtrl.followUser)

// 取消关注用户
router.delete('/:username/follow', userCtrl.unfollowUser)

module.exports = router
