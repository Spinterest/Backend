const commentService = require('../Services/commentService');
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('comments home page')
})

module.exports = router