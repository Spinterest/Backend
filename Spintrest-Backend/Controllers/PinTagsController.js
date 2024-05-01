const pinTagsService = require('../Services/PinTagsService');
const express = require('express')
const router = express.Router()

// Todo, might want to remove await
router.get('/', (request, response) => {
  response.send('PinTags Home Page')
});

// Create PinTag
router.post('/', async (request, response) => {
  const result = await pinTagsService.addTagToPin(request.body);
  response.send(result);
});

// Delete PinTag
router.delete('/', async (request, response) => {
  const result = await pinTagsService.removeTagFromPin(request.body);
  response.send(result);
});

module.exports = router