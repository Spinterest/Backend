const errorHandler = require('../SQLErrorHandler');
const webRepository = require('../Repositories/WebRepository');

const getWebWithID = async (response, spinID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.getWebWithID,
            spinID
        );
    }
};

const deleteWebWithID = async (response, spinID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.deleteWebWithID,
            spinID
        );
    }
};

const getUserWebsWithUserID = async (response, crawlerID) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.getUserWebsWithUserID,
            crawlerID
        );
    }
};

const getUserWebsWithUserEmail = async (response, crawlerEmail) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerEmail
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.getUserWebsWithUserEmail,
            crawlerEmail
        );
    }
};

const deleteUserWebsWithUserID = async (response, crawlerID) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.deleteUserWebsWithUserID,
            crawlerID
        );
    }
};

const deleteUserWebsWithUserEmail = async (response, crawlerEmail) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerEmail
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.deleteUserWebsWithUserEmail,
            crawlerEmail
        );
    }
};

const createWeb = async (response, web) => {
    if (
        errorHandler.jsonChecker(
            response,
            web,
            ['webDescription', 'webTitle', 'crawlerID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.createWeb,
            web
        );
    }
};

module.exports = {
    getWebWithID,
    getUserWebsWithUserID,
    getUserWebsWithUserEmail,
    deleteWebWithID,
    deleteUserWebsWithUserID,
    deleteUserWebsWithUserEmail,
    createWeb
};