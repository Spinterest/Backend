const spinService = require('../Services/SpinService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Spins Home Page')
});

// Get Spin With spinID
router.get('/spinID/:spinID', async (request, response) => {
  const result = await spinService.getSpinWithID(request.params.spinID)
  response.send(result);
});

// Delete Spin with ID
router.put('/spinID', async (request, response) => {
  const result = await spinService.deleteSpinWithID(request.body.spinID);
  response.send(result);
});

// Create Spin
router.post('/', async (request, response) => {
  const result = await spinService.createSpin(request.body);
  response.send(result);
});

// Get User's Spins With crawlerID
router.get('/crawlerID/:crawlerID', async (request, response) => {
  const result = await spinService.getUserSpinsWithUserID(request.params.crawlerID);
  response.send(result);
});

// Get User's Spins With crawlerEmail
router.get('/crawlerEmail/:crawlerEmail', async (request, response) => {
  const result = await spinService.getUserSpinsWithUserEmail(request.params.crawlerEmail);
  response.send(result);
});

// Delete a User's Spins With crawlerID
router.put('/crawlerID', async (request, response) => {
  const result = await spinService.deleteUserSpinsWithUserID(request.body.crawlerID);
  response.send(result);
});

// Delete a User's Spins With crawlerEmail
router.put('/crawlerEmail', async (request, response) => {
  const result = await spinService.deleteUserSpinsWithUserEmail(request.body.crawlerEmail);
  response.send(result);
});

module.exports = router