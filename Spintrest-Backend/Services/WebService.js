const queryWrapper = require('../SQLErrorHandler');
const webRepository = require('../Repositories/WebRepository');

const getWebWithID = async (response, spinID) => {
    return await queryWrapper(
        response,
        webRepository.getWebWithID,
        spinID
    );
};

const deleteWebWithID = async (response, spinID) => {
    return await queryWrapper(
        response,
        webRepository.deleteWebWithID,
        spinID

    );
};

const getUserWebsWithUserID = async (response, crawlerID) => {
    return await queryWrapper(
        response,
        webRepository.getUserWebsWithUserID,
        crawlerID
    );
};

const getUserWebsWithUserEmail = async (response, crawlerEmail) => {
    return await queryWrapper(
        response,
        webRepository.getUserWebsWithUserEmail,
        crawlerEmail
    );
};

const deleteUserWebsWithUserID = async (response, crawlerID) => {
    return await queryWrapper(
        response,
        webRepository.deleteUserWebsWithUserID,
        crawlerID
    );
};

const deleteUserWebsWithUserEmail = async (response, crawlerEmail) => {
    return await queryWrapper(
        response,
        webRepository.deleteUserWebsWithUserEmail,
        crawlerEmail
    );
};

const createWeb = async (response, web) => {
    return await queryWrapper(
        response,
        webRepository.createWeb,
        web
    );
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