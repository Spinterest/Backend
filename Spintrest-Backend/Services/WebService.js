const webRepository = require('../Repositories/WebRepository');

const getWebWithID = async (spinID) => {
    return webRepository.getWebWithID(spinID);
};

const deleteWebWithID = async (spinID) => {
    return webRepository.deleteWebWithID(spinID);
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

const createWeb = async (web) => {
    return webRepository.createWeb(web);
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