// 获取标签列表
exports.getTags = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getTags')
  } catch (err) {
    next(err)
  }
}
