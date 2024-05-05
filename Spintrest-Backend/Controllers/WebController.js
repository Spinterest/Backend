const webService = require('../Services/WebService');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('webs home page');
});

// Get Web With webID
router.get('/webID/:webID', async (request, response) => {
  const result = await webService.getWebWithID(response, request.params.webID)
  response.send(result);
});

// Delete Web with ID
router.put('/webID', async (request, response) => {
  const result = await webService.deleteWebWithID(response, request.body.webID);
  response.send(result);
});

// Create Web
router.post('/', async (request, response) => {
  const result = await webService.createWeb(response, request.body);
  response.send(result);
});

// Get User's Webs With crawlerID
router.get('/crawlerID/:crawlerID', async (request, response) => {
  const result = await webService.getUserWebsWithUserID(response, request.params.crawlerID);
  response.send(result);
});

// Get User's Webs With crawlerEmail
router.get('/crawlerEmail/:crawlerEmail', async (request, response) => {
  const result = await webService.getUserWebsWithUserEmail(response, request.params.crawlerEmail);
  response.send(result);
});

// Delete a User's Webs With crawlerID
router.put('/crawlerID', async (request, response) => {
  const result = await webService.deleteUserWebsWithUserID(response, request.body.crawlerID);
  response.send(result);
});

// Delete a User's Webs With crawlerEmail
router.put('/crawlerEmail', async (request, response) => {
  const result = await webService.deleteUserWebsWithUserEmail(response, request.body.crawlerEmail);
  response.send(result);
});

module.exports = router