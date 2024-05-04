const spinLikesService = require('../Services/SpinLikesService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Spin Likes Home Page')
});

// Like Spin
router.post('/spinLike', async (request, response) => {
  const result = await spinLikesService.likeSpin(request.body);
  response.send(result);
});

// Remove Like from Spin
router.delete('/spinLike', async (request, response) => {
  const result = await spinLikesService.removeLikeFromSpin(request.body);
  response.send(result);
});

module.exports = router