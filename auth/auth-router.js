const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

const router = require('express').Router();
const db = require('../users/users-model');

router.post('/register', (req, res) => {
  // const newUser = req.body;
  // const hash = bcrypt.hashSync(newUser.password, 10);
  // newUser.password = hash


});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
