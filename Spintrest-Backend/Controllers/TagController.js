const tagService = require('../Services/TagService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Tags Home Page')
});

// Create Tag
router.post('/', async (request, response) => {
  const result = await tagService.addTag(request.body.tagName);
  response.send(result);
});

// Get Filtered Tag Results
router.get('/tagName/:tagName', async (request, response) => {
  const result = await tagService.filterTags(request.params.tagName);
  response.send(result);
});

module.exports = router