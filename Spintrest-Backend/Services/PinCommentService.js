const pinCommentRepository = require('../Repositories/PinCommentRepository');

const makeCommentToPin = async (pinComment) => {
    return pinCommentRepository.makeCommentToPin(pinComment);
};

const getPinCommentWithID = async (pinCommentID) => {
    return pinCommentRepository.getPinCommentWithID(pinCommentID);
};

const getCommentsForPinWithPinID = async (pinID) => {
    return pinCommentRepository.getCommentsForPinWithPinID(pinID);
};

const deletePinCommentWithID = async (pinCommentID) => {
    return pinCommentRepository.deletePinCommentWithID(pinCommentID);
};

module.exports = {
    makeCommentToPin,
    getPinCommentWithID,
    getCommentsForPinWithPinID,
    deletePinCommentWithID
};