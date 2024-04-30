const googleUserRepository = require('../Repositories/GoogleUserRepository');
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Google User Homepage');
});

// Todo, might want to remove await
router.get('/id/:googleUserID', async (request, response) => {
    const result = await googleUserRepository.getUserWithID(request.params.googleUserID)
    response.send(result);
});

// Todo, might want to remove await
router.get('/email/:googleUserEmail', async (request, response) => {
    const result = await googleUserRepository.getUserWithEmail(request.params.googleUserEmail);
    response.send(result);
});

module.exports = router