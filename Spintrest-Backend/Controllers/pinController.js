const pinService = require('../Services/pinService');
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('pins home page')
})

module.exports = router