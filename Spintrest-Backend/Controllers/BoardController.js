const boardService = require('../Services/BoardService');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('boards home page');
});

// Get Board With boardID
router.get('/boardID/:boardID', async (request, response) => {
  const result = await boardService.getBoardWithID(request.params.boardID)
  response.send(result);
});

// Delete Board with ID
router.put('/boardID', async (request, response) => {
  const result = await boardService.deleteBoardWithID(request.body.boardID);
  response.send(result);
});

// Create Board
router.post('/', async (request, response) => {
  const result = await boardService.createBoard(request.body);
  response.send(result);
});

// Get User's Boards With googleUserID
router.get('/googleUserID/:googleUserID', async (request, response) => {
  const result = await boardService.getUserBoardsWithUserID(request.params.googleUserID);
  response.send(result);
});

// Get User's Boards With googleUserEmail
router.get('/googleUserEmail/:googleUserEmail', async (request, response) => {
  const result = await boardService.getUserBoardsWithUserEmail(request.params.googleUserEmail);
  response.send(result);
});

// Delete a User's Boards With googleUserID
router.put('/googleUserID', async (request, response) => {
  const result = await boardService.deleteUserBoardsWithUserID(request.body.googleUserID);
  response.send(result);
});

// Delete a User's Boards With googleUserEmail
router.put('/googleUserEmail', async (request, response) => {
  const result = await boardService.deleteUserBoardsWithUserEmail(request.body.googleUserEmail);
  response.send(result);
});

module.exports = router