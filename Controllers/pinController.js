const pinRepository = require('../Repositories/PinRepository');
const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.send('Pins Home Page')
});

// Todo, might want to remove await
router.get('/pinID/:pinID', async (request, response) => {
  const result = await pinRepository.getPinWithID(request.params.pinID)
  response.send(result);
});

// Todo, might want to remove await
router.get('/user/id/:googleUserID', async (request, response) => {
  const result = await pinRepository.getUserPinsWithUserID(request.params.googleUserID);
  response.send(result);
});

router.get('/user/email/:googleUserEmail', async (request, response) => {
  const result = await pinRepository.getUserPinsWithUserEmail(request.params.googleUserEmail);
  response.send(result);
});

module.exports = router