const boardPinsService = require('../Services/BoardPinsService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('BoardPins Home Page');
});

// Create Board Pin
router.post('/', async (request, response) => {
  const result = await boardPinsService.addPinToBoard(request.body);
  response.send(result);
});

// Delete Board Pin
router.delete('/', async (request, response) => {
  const result = await boardPinsService.removePinFromBoard(request.body);
  response.send(result);
});

module.exports = router