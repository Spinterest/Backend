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

const deleteSpinWithID = async (response, spin) => {
    if (
        errorHandler.jsonChecker(
            response,
            spin,
            ['spinID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.deleteSpinWithID,
            spin.spinID
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

const deleteUserSpinsWithUserID = async (response, crawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            crawler,
            ['crawlerID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.deleteUserSpinsWithUserID,
            crawler.crawlerID
        );
    }
};

const deleteUserSpinsWithUserEmail = async (response, crawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            crawler,
            ['crawlerEmail']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinRepository.deleteUserSpinsWithUserEmail,
            crawler.crawlerEmail
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