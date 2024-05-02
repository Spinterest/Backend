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

// Get list of comments for a pin.
router.get('/commentsForPin/:pinID', async (request, response) => {
  const result = await complexService.getCommentsForPin(request.params.pinID);
  response.send(result);
});

// Get unlimited list of pins for a board.
router.get('/pinsForBoard/:boardID', async (request, response) => {
  const result = await complexService.getPinsForBoard(request.params.boardID);
  response.send(result);
});

// Get limited list of pins for a board.
router.get('/limitedPinsForBoard/:boardID', async (request, response) => {
  const result = await complexService.getPinsForBoard(
      request.params.boardID,
      true
  );
  response.send(result);
});

// Get number list of pins for a board.
router.get('/numberOfPinsInBoard/:boardID', async (request, response) => {
  const result = await complexService.getNumberOfPinsInBoard(request.params.boardID);
  response.send(result);
});

// Get list of boards for a user.
router.get('/boardsForUser/:googleUserID', async (request, response) => {
  const result = await complexService.getBoardsForUser(request.params.googleUserID);
  response.send(result);
});

// Get Liked user feed
router.get('/likedUserFeed', async (request, response) => {
  const result = await complexService.getUserFeed(
      request.body.googleUserID,
      true,
      request.body.offset,
      request.body.limit
  );
  response.send(result);
});

// Get Disliked user feed
router.get('/dislikedUserFeed', async (request, response) => {
  const result = await complexService.getUserFeed(
      request.body.googleUserID,
      false,
      request.body.offset,
      request.body.limit
  );
  response.send(result);
});


module.exports = router