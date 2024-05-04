const errorHandler = require('../SQLErrorHandler');
const spinRepository = require('../Repositories/SpinRepository');

const getSpinWithID = async (response, spinID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.getSpinWithID,
            spinID
        );
    }
};

const deleteSpinWithID = async (response, spinID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.deleteSpinWithID,
            spinID
        );
    }
};

const getUserSpinsWithUserID = async (response, crawlerID) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.getUserSpinsWithUserID,
            crawlerID
        );
    }
};

const getUserSpinsWithUserEmail = async (response, crawlerEmail) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerEmail
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.getUserSpinsWithUserEmail,
            crawlerEmail
        );
    }
};

const deleteUserSpinsWithUserID = async (response, crawlerID) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.deleteUserSpinsWithUserID,
            crawlerID
        );
    }
};

const deleteUserSpinsWithUserEmail = async (response, crawlerEmail) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerEmail
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.deleteUserSpinsWithUserEmail,
            crawlerEmail
        );
    }
};

const createSpin = async (response, spin) => {
    if (
        errorHandler.jsonChecker(
            response,
            spin,
            ['spinLink', 'spinDescription', 'spinTitle', 'crawlerID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.createSpin,
            spin
        );
    }
};

module.exports = {
    getSpinWithID,
    getUserSpinsWithUserID,
    getUserSpinsWithUserEmail,
    deleteSpinWithID,
    deleteUserSpinsWithUserID,
    deleteUserSpinsWithUserEmail,
    createSpin
};