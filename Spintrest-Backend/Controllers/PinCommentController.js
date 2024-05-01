const pinCommentService = require('../Services/PinCommentService');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Pin Comment\'s home page');
});

// Get PinComment With pinCommentID
router.get('/pinCommentID/:pinCommentID', async (request, response) => {
  const result = await pinCommentService.getPinCommentWithID(request.params.pinCommentID)
  response.send(result);
});

// Get PinComments for Pin With pinID
router.get('/pinID/:pinID', async (request, response) => {
  const result = await pinCommentService.getPinCommentWithID(request.params.pinID)
  response.send(result);
});

// Delete PinComment with pinCommentID
router.put('/pinCommentID', async (request, response) => {
  const result = await pinCommentService.deletePinCommentWithID(request.body.pinCommentID);
  response.send(result);
});

// Create PinComment
router.post('/pinComment', async (request, response) => {
  const result = await pinCommentService.makeCommentToPin(request.body);
  response.send(result);
});

module.exports = router