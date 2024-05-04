const spinCommentService = require('../Services/SpinCommentService');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Spin Comment\'s home page');
});

// Get SpinComment With spinCommentID
router.get('/spinCommentID/:spinCommentID', async (request, response) => {
  const result = await spinCommentService.getSpinCommentWithID(response, request.params.spinCommentID)
  response.send(result);
});

// Get SpinComments for Spin With spinID
router.get('/spinID/:spinID', async (request, response) => {
  const result = await spinCommentService.getSpinCommentWithID(response, request.params.spinID)
  response.send(result);
});

// Delete SpinComment with spinCommentID
router.put('/spinCommentID', async (request, response) => {
  const result = await spinCommentService.deleteSpinCommentWithID(response, request.body.spinCommentID);
  response.send(result);
});

// Create SpinComment
router.post('/spinComment', async (request, response) => {
  const result = await spinCommentService.makeCommentToSpin(response, request.body);
  response.send(result);
});

module.exports = router