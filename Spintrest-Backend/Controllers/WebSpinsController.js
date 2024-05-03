const webSpinsService = require('../Services/WebSpinsService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('WebSpins Home Page');
});

// Create Web Spin
router.post('/', async (request, response) => {
  const result = await webSpinsService.addSpinToWeb(request.body);
  response.send(result);
});

// Delete Web Spin
router.delete('/', async (request, response) => {
  const result = await webSpinsService.removeSpinFromWeb(request.body);
  response.send(result);
});

module.exports = router