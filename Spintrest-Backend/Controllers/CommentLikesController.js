const commentLikesService = require('../Services/CommentLikesService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Comment Likes Home Page')
});

// Like Spin
router.post('/commentLike', async (request, response) => {
  const result = await commentLikesService.likeComment(response, request.body);
  response.send(result);
});

// Remove Like from Spin
router.delete('/dislikeComment', async (request, response) => {
  const result = await commentLikesService.removeLikeFromComment(response, request.body);
  response.send(result);
});

module.exports = router