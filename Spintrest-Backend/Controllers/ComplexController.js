const complexService = require('../Services/ComplexService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Complex Calls Home Page')
});

// Get list of users that liked a comment.
router.get('/usersWhoLikedComment/:spinCommentID', async (request, response) => {
  const result = await complexService.getCrawlersWhoLikedComment(request.params.spinCommentID);
  response.send(result);
});

// Get list of users that liked a spin.
router.get('/usersWhoLikedSpin/:spinID', async (request, response) => {
  const result = await complexService.getCrawlersWhoLikedSpin(request.params.spinID);
  response.send(result);
});

// Get list of comments for a spin.
router.get('/commentsForSpin/:spinID', async (request, response) => {
  const result = await complexService.getCommentsForSpin(request.params.spinID);
  response.send(result);
});

// Get unlimited list of spins for a web.
router.get('/spinsForWeb/:webID', async (request, response) => {
  const result = await complexService.getSpinsForWeb(request.params.webID);
  response.send(result);
});

// Get limited list of spins for a web.
router.get('/limitedSpinsForWeb/:webID', async (request, response) => {
  const result = await complexService.getSpinsForWeb(
      request.params.webID,
      true
  );
  response.send(result);
});

// Get number list of spins for a web.
router.get('/numberOfSpinsInWeb/:webID', async (request, response) => {
  const result = await complexService.getNumberOfSpinsInWeb(request.params.webID);
  response.send(result);
});

// Get list of webs for a user.
router.get('/websForUser/:crawlerID', async (request, response) => {
  const result = await complexService.getWebsForCrawler(request.params.crawlerID);
  response.send(result);
});

// Get Liked user feed
router.get('/likedUserFeed', async (request, response) => {
  const result = await complexService.getCrawlerFeed(
      request.body.crawlerID,
      true,
      request.body.offset,
      request.body.limit
  );
  response.send(result);
});

// Get Disliked user feed
router.get('/dislikedUserFeed', async (request, response) => {
  const result = await complexService.getCrawlerFeed(
      request.body.crawlerID,
      false,
      request.body.offset,
      request.body.limit
  );
  response.send(result);
});


module.exports = router