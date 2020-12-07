exports.getTags = async (req, res, next) => {
  try {
    res.send('getTags')
  } catch (err) {
    next(err)
  }
}
