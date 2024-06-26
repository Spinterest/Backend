const tagService = require('../Services/TagService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('Tags Home Page')
});

// Get Tag by TagName
router.get('/tagName/:tagName', async (request, response) => {
  const result = await tagService.getTagByName(response, request.params.tagName);
  response.send(result);
});

// Create Tag
router.post('/createTag', async (request, response) => {
  const result = await tagService.addTag(response, request.body);
  response.send(result);
});

// Get Filtered Tag Results
router.post('/filter/tagName', async (request, response) => {
  const result = await tagService.filterTags(response, request.body);
  response.send(result);
});

module.exports = router