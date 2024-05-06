const webSpinsService = require('../Services/WebSpinsService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('WebSpins Home Page');
});

// Create Web Spin
router.post('/createWebSpin', async (request, response) => {
  const result = await webSpinsService.addSpinToWeb(response, request.body);
  response.send(result);
});

// Delete Web Spin
router.delete('/deleteWebSpin', async (request, response) => {
  const result = await webSpinsService.removeSpinFromWeb(response, request.body);
  response.send(result);
});

module.exports = router