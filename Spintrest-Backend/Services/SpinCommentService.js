const queryWrapper = require('../SQLErrorHandler');
const spinCommentRepository = require('../Repositories/SpinCommentRepository');

const makeCommentToSpin = async (response, spinComment) => {
    return await queryWrapper(
        response,
        spinCommentRepository.makeCommentToSpin,
        spinComment
    );
};

const getSpinCommentWithID = async (response, spinCommentID) => {
    return await queryWrapper(
        response,
        spinCommentRepository.getSpinCommentWithID,
        spinCommentID
    );
};

const getCommentsForSpinWithSpinID = async (response, spinID) => {
    return await queryWrapper(
        response,
        spinCommentRepository.getCommentsForSpinWithSpinID,
        spinID
    );
};

const deleteSpinCommentWithID = async (response, spinCommentID) => {
    return await queryWrapper(
        response,
        spinCommentRepository.deleteSpinCommentWithID,
        spinCommentID
    );
};

module.exports = {
    makeCommentToSpin,
    getSpinCommentWithID,
    getCommentsForSpinWithSpinID,
    deleteSpinCommentWithID
};