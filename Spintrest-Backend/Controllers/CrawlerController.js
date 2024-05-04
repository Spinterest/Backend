const crawlerService = require('../Services/CrawlerService');
const express = require('express');
// const Crawler = require("../Models/CrawlerModel");
const router = express.Router();

// Todo, might want to remove await
router.get('/', (request, response) => {
    response.send('Crawler User Homepage');
});

// Get user with crawlerID
router.get('/crawlerID/:crawlerID', async (request, response) => {
    const result = await crawlerService.getUserWithID(request.params.crawlerID)
    response.send(result);
});

// Get user with crawlerEmail
router.get('/crawlerEmail/:crawlerEmail', async (request, response) => {
    const result = await crawlerService.getUserWithEmail(request.params.crawlerEmail);
    response.send(result);
});

// Add user with crawlerEmail
router.post('/login', async (request, response) => {
    const result = await crawlerService.login(request.body.crawlerEmail);
    response.send(result);
});

// Delete a user using crawlerEmail
router.put('/crawlerEmail', async (request, response) => {
    const result = await crawlerService.deleteUserWithEmail(request.body.crawlerEmail);
    response.send(result);
});

// Delete a user using crawlerID
router.put('/crawlerID', async (request, response) => {
    const result = await crawlerService.deleteUserWithID(request.body.crawlerID);
    response.send(result);
});

// Edit a Crawler's UserName with their ID
router.put('/editCrawlerNameWithID', async (request, response) => {
    const result = await crawlerService.editCrawlerNameWithID(request.body);
    response.send(result);
});

// Edit a Crawler's UserName with their Email
router.put('/editCrawlerNameWithEmail', async (request, response) => {
    const result = await crawlerService.editCrawlerNameWithEmail(request.body);
    response.send(result);
});

module.exports = router