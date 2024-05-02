const complexRepository = require('../Repositories/ComplexRepository');

const getUsersWhoLikedComment = async (pinCommentID) => {
    return await complexRepository.getUsersWhoLikedComment(pinCommentID);
}

const getUsersWhoLikedPin = async (pinID) => {
    return await complexRepository.getUsersWhoLikedPin(pinID);
}

const getCommentsForPin = async (pinID) => {
    return await complexRepository.getCommentsForPin(pinID);
}

const getPinsForBoard = async (
    boardID,
    isLimited = false
) => {
    return await complexRepository.getPinsForBoard(boardID, isLimited);
}

const getNumberOfPinsInBoard = async (boardID) => {
    return await complexRepository.getNumberOfPinsInBoard(boardID);
}

const getBoardsForUser = async (googleUserID) => {
    return await complexRepository.getBoardsForUser(googleUserID);
}

module.exports = {
    getPinsForBoard,
    getBoardsForUser,
    getCommentsForPin,
    getUsersWhoLikedPin,
    getNumberOfPinsInBoard,
    getUsersWhoLikedComment
};