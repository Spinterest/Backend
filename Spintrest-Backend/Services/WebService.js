const webRepository = require('../Repositories/WebRepository');

const getWebWithID = async (pinID) => {
    return webRepository.getWebWithID(pinID);
};

const deleteWebWithID = async (pinID) => {
    return webRepository.deleteWebWithID(pinID);
};

const getUserWebsWithUserID = async (crawlerID) => {
    return webRepository.getUserWebsWithUserID(crawlerID);
};

const getUserWebsWithUserEmail = async (crawlerEmail) => {
    return webRepository.getUserWebsWithUserEmail(crawlerEmail);
};

const deleteUserWebsWithUserID = async (crawlerID) => {
    return webRepository.deleteUserWebsWithUserID(crawlerID);
};

const deleteUserWebsWithUserEmail = async (crawlerEmail) => {
    return webRepository.deleteUserWebsWithUserEmail(crawlerEmail);
};

const createWeb = async (pin) => {
    return webRepository.createWeb(pin);
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