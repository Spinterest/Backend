const spinTagsService = require('../Services/SpinTagsService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('SpinTags Home Page')
});

// Create SpinTag
router.post('/', async (request, response) => {
  const result = await spinTagsService.addTagToSpin(response, request.body);
  response.send(result);
});

// Delete SpinTag
router.delete('/', async (request, response) => {
  const result = await spinTagsService.removeTagFromSpin(response, request.body);
  response.send(result);
});

module.exports = router