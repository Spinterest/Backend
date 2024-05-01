const boardRepository = require('../Repositories/BoardRepository');

const getBoardWithID = async (pinID) => {
    return boardRepository.getBoardWithID(pinID);
};

const deleteBoardWithID = async (pinID) => {
    return boardRepository.deleteBoardWithID(pinID);
};

const getUserBoardsWithUserID = async (googleUserID) => {
    return boardRepository.getUserBoardsWithUserID(googleUserID);
};

const getUserBoardsWithUserEmail = async (googleUserEmail) => {
    return boardRepository.getUserBoardsWithUserEmail(googleUserEmail);
};

const deleteUserBoardsWithUserID = async (googleUserID) => {
    return boardRepository.deleteUserBoardsWithUserID(googleUserID);
};

const deleteUserBoardsWithUserEmail = async (googleUserEmail) => {
    return boardRepository.deleteUserBoardsWithUserEmail(googleUserEmail);
};

const createBoard = async (pin) => {
    return boardRepository.createBoard(pin);
};

module.exports = {
    getBoardWithID,
    getUserBoardsWithUserID,
    getUserBoardsWithUserEmail,
    deleteBoardWithID,
    deleteUserBoardsWithUserID,
    deleteUserBoardsWithUserEmail,
    createBoard
};