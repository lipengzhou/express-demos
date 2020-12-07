const { User } = require('../model')

exports.register = async ({ body }, res, next) => {
  try {
    const user = await new User(body.user)
    await user.save()
    res.status(200).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = req.body.user
    res.send('login')
  } catch (err) {
    console.log(err)
    next(err)
  }
}

exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send('getCurrentUser')
  } catch (err) {
    next(err)
  }
}

exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}

exports.getProfile = async (req, res, next) => {
  try {
    res.send('getProfile')
  } catch (err) {
    next(err)
  }
}

exports.followUser = async (req, res, next) => {
  try {
    res.send('followUser')
  } catch (err) {
    next(err)
  }
}

exports.unfollowUser = async (req, res, next) => {
  try {
    res.send('unFollowUser')
  } catch (err) {
    next(err)
  }
}
