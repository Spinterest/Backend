const pinLikesService = require('../Services/PinLikesService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Pin Likes Home Page')
});

// Like Pin
router.post('/pinLike', async (request, response) => {
  const result = await pinLikesService.likePin(request.body);
  response.send(result);
});

// Remove Like from Pin
router.delete('/pinLike', async (request, response) => {
  const result = await pinLikesService.removeLikeFromPin(request.body);
  response.send(result);
});

module.exports = router