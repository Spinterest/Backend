const pinService = require('../Services/PinService');
const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.send('Pins Home Page')
});

// Get Pin With pinID
// Todo, might want to remove await
router.get('/pinID/:pinID', async (request, response) => {
  const result = await pinService.getPinWithID(request.params.pinID)
  response.send(result);
});

// Get Pin With googleUserID
// Todo, might want to remove await
router.get('/googleUserID/:googleUserID', async (request, response) => {
  const result = await pinService.getUserPinsWithUserID(request.params.googleUserID);
  response.send(result);
});

router.get('/googleUserEmail/:googleUserEmail', async (request, response) => {
  const result = await pinService.getUserPinsWithUserEmail(request.params.googleUserEmail);
  response.send(result);
});

module.exports = router