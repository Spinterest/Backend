const errorHandler = require('../SQLErrorHandler');
const webRepository = require('../Repositories/WebRepository');
const crawlerRepository = require("../Repositories/CrawlerRepository");

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

const deleteWebWithID = async (response, web) => {
    if (
        errorHandler.jsonChecker(
            response,
            web,
            ['webID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.deleteWebWithID,
            web.webID
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

const deleteUserWebsWithUserID = async (response, crawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            crawler,
            ['crawlerID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.deleteUserWebsWithUserID,
            crawler.crawlerID
        );
    }
};

const deleteUserWebsWithUserEmail = async (response, crawler) => {
    if (
        errorHandler.variableChecker(
            response,
            crawler.crawlerEmail,
            ['crawlerEmail']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webRepository.deleteUserWebsWithUserEmail,
            crawler.crawlerEmail
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
        const crawler = await errorHandler.queryWrapper(
            response,
            crawlerRepository.getUserWithID,
            web.crawlerID
        );

        if (response.statusCode === 500 || !crawler){
            return errorHandler.throwAlert(`No crawler is registered with that ID`);
        }

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