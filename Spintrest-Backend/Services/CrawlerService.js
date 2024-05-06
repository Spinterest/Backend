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

const deleteUserWithID = async (response, crawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            crawler,
            ['crawlerID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.deleteUserWithID,
            crawler.crawlerID
        );
    }
};

const deleteUserWithEmail = async (response, crawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            crawler,
            ['crawlerEmail']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.deleteUserWithEmail,
            crawler.crawlerEmail
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

const login = async (response, crawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            crawler,
            ['crawlerEmail']
        )
    ){
        let newCrawler = await errorHandler.queryWrapper(
            response,
            crawlerRepository.getUserWithEmail,
            crawler.crawlerEmail
        );

        // stop early if there was an issue with the query
        if (response.status === 500) {
            return;
        }

        if (!newCrawler) {
            // We are checking again to see if they exist but their account is deleted
            newCrawler = await crawlerRepository.getUserWithEmail(crawler.crawlerEmail, true);
            if (newCrawler) {
                await crawlerRepository.restoreUserWithEmail(crawler.crawlerEmail);
            }
            else {
                await crawlerRepository.addUserWithEmail(crawler.crawlerEmail);
            }

            newCrawler = await crawlerRepository.getUserWithEmail(crawler.crawlerEmail);
        }

        return newCrawler;
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