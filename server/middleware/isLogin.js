const jwt = require('jsonwebtoken');
require('dotenv').config()
const secret_key = process.env.secretKey

let isLogin = function (req, res, next) {
  if (req.body) {
    jwt.verify(req.body.token, secret_key, function(err, decoded) {
      console.log('ini decoded body', decoded)
      if(decoded) {
        req.header.decoded = decoded
        console.log('decoded>',decoded ,'<decoded');
        next()
        console.log('next>>>')
      }
      else {
        res.status(401).send({
          error: 'please login first'
        })
      }
    })
  }
}

module.exports = {
  isLogin
}