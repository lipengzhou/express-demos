const express = require('express')
const tagCtrl = require('../controller/tag')

const router = express.Router()

// 获取文章列表
router.get('/', tagCtrl.getTags)

module.exports = router
