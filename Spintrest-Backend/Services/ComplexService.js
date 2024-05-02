const complexRepository = require('../Repositories/ComplexRepository');

const getUsersWhoLikedComment = async (pinCommentID) => {
    return await complexRepository.getUsersWhoLikedComment(pinCommentID);
}

const getUsersWhoLikedPin = async (pinID) => {
    return await complexRepository.getUsersWhoLikedPin(pinID);
}

module.exports = {
    getUsersWhoLikedComment,
    getUsersWhoLikedPin
};