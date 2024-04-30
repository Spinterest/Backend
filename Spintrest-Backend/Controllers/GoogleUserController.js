const googleUserService = require('../Services/GoogleUserService');
const express = require('express');
// const GoogleUser = require("../Models/GoogleUserModel");
const router = express.Router();

// Todo, might want to remove await
router.get('/', (request, response) => {
    response.send('Google User Homepage');
});

// Get user with googleUserID
router.get('/googleUserID/:googleUserID', async (request, response) => {
    const result = await googleUserService.getUserWithID(request.params.googleUserID)
    response.send(result);
});

// Get user with googleUserEmail
router.get('/googleUserEmail/:googleUserEmail', async (request, response) => {
    const result = await googleUserService.getUserWithEmail(request.params.googleUserEmail);
    response.send(result);
});

// Add user with googleUserEmail
router.post('/login', async (request, response) => {
    const result = await googleUserService.login(request.body.googleUserEmail);
    response.send(result);
});

module.exports = router