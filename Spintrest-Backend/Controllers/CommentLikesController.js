const commentLikesService = require('../Services/CommentLikesService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Comment Likes Home Page')
});

// Like Pin
router.post('/commentLike', async (request, response) => {
  const result = await commentLikesService.likeComment(request.body);
  response.send(result);
});

// Remove Like from Pin
router.delete('/commentLike', async (request, response) => {
  const result = await commentLikesService.removeLikeFromComment(request.body);
  response.send(result);
});

module.exports = router