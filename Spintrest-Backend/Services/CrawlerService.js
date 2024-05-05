const errorHandler = require('../SQLErrorHandler');
const crawlerRepository = require('../Repositories/CrawlerRepository');

const getUserWithID = async (response, crawlerID) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.getUserWithID,
            crawlerID
        );
    }
};

const getUserWithEmail = async (response, crawlerEmail) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerEmail
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.getUserWithEmail,
            crawlerEmail
        );
    }
};

const deleteUserWithID = async (response, crawlerID) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.deleteUserWithID,
            crawlerID
        );
    }
};

const deleteUserWithEmail = async (response, crawlerEmail) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerEmail
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.deleteUserWithEmail,
            crawlerEmail
        );
    }
};

const editCrawlerNameWithID = async (response, crawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            crawler,
            ['crawlerID', 'crawlerUserName']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.editCrawlerNameWithID,
            crawler.crawlerID,
            crawler.crawlerUserName
        );
    }
};

const editCrawlerNameWithEmail = async (response, crawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            crawler,
            ['crawlerEmail', 'crawlerUserName']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.editCrawlerNameWithEmail,
            crawler.crawlerEmail,
            crawler.crawlerUserName
        );
    }
};

const login = async (response, crawlerEmail) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerEmail
        )
    ){
        let crawler = await errorHandler.queryWrapper(
            response,
            crawlerRepository.getUserWithEmail,
            crawlerEmail
        );

        // stop early if there was an issue with the query
        if (response.status === 500) {
            return;
        }

        if (!crawler) {
            // We are checking again to see if they exist but their account is deleted
            crawler = await crawlerRepository.getUserWithEmail(crawlerEmail, true);
            if (crawler) {
                await crawlerRepository.restoreUserWithEmail(crawlerEmail);
            }
            else {
                await crawlerRepository.addUserWithEmail(crawlerEmail);
            }

            crawler = await crawlerRepository.getUserWithEmail(crawlerEmail);
        }

        return crawler;
    }
}

module.exports = {
    getUserWithID,
    getUserWithEmail,
    login,
    deleteUserWithID,
    deleteUserWithEmail,
    editCrawlerNameWithID,
    editCrawlerNameWithEmail
};