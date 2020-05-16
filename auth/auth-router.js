const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

const router = require('express').Router();
const db = require('../users/users-model');

router.post('/register', (req, res) => {
  const newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 10);
  newUser.password = hash

    db.add(newUser)
    .then(user =>{
      res.status(201).json(user)
    })
    .catch(error =>{
      console.log(error)
      res.status(500).json({errorMessage:'Error registering a user'})})
});

router.post('/login', (req, res) => {
  
});

function generateToken(user){
  const payload ={
    subject: user.id,
    username: user.username
  };
  const secret = secret.jwtSecret;
  const option ={
    expiresIn: '15 min'
  };
  return jwt.sign(payload,secrect,option)
};

module.exports = router;
