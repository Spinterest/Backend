const crawlerService = require('../Services/CrawlerService');
const express = require('express');
const router = express.Router();

// Todo, might want to remove await
router.get('/', (request, response) => {
    response.send('Crawler User Homepage');
});

// Get user with crawlerID
router.get('/crawlerID/:crawlerID', async (request, response) => {
    const result = await crawlerService.getUserWithID(response, request.params.crawlerID)
    response.send(result);
});

// Get user with crawlerEmail
router.get('/crawlerEmail/:crawlerEmail', async (request, response) => {
    const result = await crawlerService.getUserWithEmail(response, request.params.crawlerEmail);
    response.send(result);
});

// Add user with crawlerEmail
router.post('/login', async (request, response) => {
    const result = await crawlerService.login(response, request.body.crawlerEmail);
    response.send(result);
});

// Delete a user using crawlerEmail
router.put('/crawlerEmail', async (request, response) => {
    const result = await crawlerService.deleteUserWithEmail(response, request.body.crawlerEmail);
    response.send(result);
});

// Delete a user using crawlerID
router.put('/crawlerID', async (request, response) => {
    const result = await crawlerService.deleteUserWithID(response, request.body.crawlerID);
    response.send(result);
});

// Edit a Crawler's UserName with their ID
router.put('/editCrawlerNameWithID', async (request, response) => {
    const result = await crawlerService.editCrawlerNameWithID(response, request.body);
    response.send(result);
});

// Edit a Crawler's UserName with their Email
router.put('/editCrawlerNameWithEmail', async (request, response) => {
    const result = await crawlerService.editCrawlerNameWithEmail(response, request.body);
    response.send(result);
});

module.exports = router