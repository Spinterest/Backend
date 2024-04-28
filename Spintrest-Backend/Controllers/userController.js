const userService = require('../Services/userService');
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  var users = await userService.getAllUsers();
  res.json(users);
})

module.exports = router