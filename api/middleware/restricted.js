const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, 'test', (err, decodedToken) => {
      if (err) {
        res.status(401).json({message: "token invalid" })
      } else {
        req.decodedJwt = decodedToken
        console.log('decoded token', req.decodedJwt)
        next();
      }
    })
  } else {
    res.status(401).json({message: 'token required' })
  }
};
