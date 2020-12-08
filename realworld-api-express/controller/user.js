const { User } = require('../model')

// 用户登录
exports.login = async (req, res, next) => {
  try {
    // 1. 获取请求体数据
    // 2. 数据验证
    // 3. 验证通过，将数据保存到数据库
    // 4. 发送成功响应
    res.send('login')
  } catch (err) {
    next(err)
  }
}

// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 1. 获取请求体数据
    console.log(req.body)
    // 2. 数据验证
    // 2.1 基本数据验证
    // 2.2 业务数据验证

    // 3. 验证通过，将数据保存到数据库
    const user = new User(req.body.user)

    // 保存到数据库
    await user.save()

    // 4. 发送成功响应
    res.status(201).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getCurrentUser')
  } catch (err) {
    next(err)
  }
}

// 更新当前登录用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}

// 获取指定用户资料
exports.getUserProfile = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getUserProfile')
  } catch (err) {
    next(err)
  }
}

// 关注用户
exports.followUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('followUser')
  } catch (err) {
    next(err)
  }
}

// 取消关注用户
exports.unfollowUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('unfollowUser')
  } catch (err) {
    next(err)
  }
}
