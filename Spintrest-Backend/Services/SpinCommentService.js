const errorHandler = require('../SQLErrorHandler');
const spinCommentRepository = require('../Repositories/SpinCommentRepository');

const makeCommentToSpin = async (response, spinComment) => {
    if (
        errorHandler.jsonChecker(
            response,
            spinComment,
            ['spinCommentMessage', 'spinID', 'crawlerID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinCommentRepository.makeCommentToSpin,
            spinComment
        );
    }
};

const getSpinCommentWithID = async (response, spinCommentID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinCommentID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinCommentRepository.getSpinCommentWithID,
            spinCommentID
        );
    }
};

const deleteSpinCommentWithID = async (response, spinComment) => {
    if (
        errorHandler.jsonChecker(
            response,
            spinComment,
            ['spinCommentID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinCommentRepository.deleteSpinCommentWithID,
            spinComment.spinCommentID
        );
    }
};

module.exports = {
    makeCommentToSpin,
    getSpinCommentWithID,
    deleteSpinCommentWithID
};