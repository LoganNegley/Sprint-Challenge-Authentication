const bcrypt = require('bycryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const secret = require('../config/');

const router = require('express').Router();
const db = require('../users/users-model');

router.post('/register', (req, res) => {
  
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
