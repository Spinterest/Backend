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

const getCommentsForSpinWithSpinID = async (response, spinID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinCommentRepository.getCommentsForSpinWithSpinID,
            spinID
        );
    }
};

const deleteSpinCommentWithID = async (response, spinCommentID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinCommentID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinCommentRepository.deleteSpinCommentWithID,
            spinCommentID
        );
    }
};

module.exports = {
    makeCommentToSpin,
    getSpinCommentWithID,
    getCommentsForSpinWithSpinID,
    deleteSpinCommentWithID
};