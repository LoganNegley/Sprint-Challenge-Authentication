const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req,res,next) =>{
  const token = req.headers.authorization;

  if(token){
    jwt.verify(token, secret.jwtSecret, (error, decodedToken) =>{
      if(error){
        res.status(401).json({message:'bad authorization'})
      }else{
        req.decodedToken = decodedToken;
        next()
      }
    })
    }else{
      res.status(401).json({message:'bad authorization'})
    }
}