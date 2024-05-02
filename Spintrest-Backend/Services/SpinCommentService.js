const spinCommentRepository = require('../Repositories/SpinCommentRepository');

const makeCommentToSpin = async (spinComment) => {
    return spinCommentRepository.makeCommentToSpin(spinComment);
};

const getSpinCommentWithID = async (spinCommentID) => {
    return spinCommentRepository.getSpinCommentWithID(spinCommentID);
};

const getCommentsForSpinWithSpinID = async (spinID) => {
    return spinCommentRepository.getCommentsForSpinWithSpinID(spinID);
};

const deleteSpinCommentWithID = async (spinCommentID) => {
    return spinCommentRepository.deleteSpinCommentWithID(spinCommentID);
};

module.exports = {
    makeCommentToSpin,
    getSpinCommentWithID,
    getCommentsForSpinWithSpinID,
    deleteSpinCommentWithID
};