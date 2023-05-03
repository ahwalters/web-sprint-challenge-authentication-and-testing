module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        next({ status: 401, message: "token invalid" })
      } else {
        req.decodedJwt = decodedToken
        console.log('decoded token', req.decodedJwt)

        next()
      }
    })
  } else {
    next({ status: 401, message: 'token required' })
  }
};
