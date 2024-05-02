const complexService = require('../Services/ComplexService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Complex Calls Home Page')
});

// Get list of users that liked a comment.
router.get('/usersWhoLikedComment/:pinCommentID', async (request, response) => {
  const result = await complexService.getUsersWhoLikedComment(request.params.pinCommentID);
  response.send(result);
});

// Get list of users that liked a pin.
router.get('/usersWhoLikedPin/:pinID', async (request, response) => {
  const result = await complexService.getUsersWhoLikedPin(request.params.pinID);
  response.send(result);
});


module.exports = router