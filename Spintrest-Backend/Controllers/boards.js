const express = require('express')
const router = express.Router()

  router.get('/', (req, res) => {
    res.send('boards home page')
  })

  router.get('/:userId', (req, res) => {
    res.send('boards for '+req.params.userId)
  })

  router.get('/:userId/:boardId', (req, res) => {
    res.send('boards for '+req.params.userId)
  })

module.exports = router