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

const editCrawlerNameWithID = async (response, newCrawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            newCrawler,
            ['crawlerID', 'crawlerUserName']
        )
    ){
        await errorHandler.queryWrapper(
            response,
            crawlerRepository.getUserWithID,
            newCrawler.crawlerID
        );

        if (response.statusCode === 500){
            return errorHandler.throwAlert(`No crawler is registered with that ID`);
        }

        const userNameCount = await errorHandler.queryWrapper(
            response,
            crawlerRepository.isUsernameAvailable,
            newCrawler.crawlerUserName
        );

        if (response.statusCode === 500){
            // No reason for this one.
            return;
        }

        if (userNameCount.count !== "0"){
            return errorHandler.throwAlert(`Username: ${newCrawler.crawlerUserName}, is in use.`);
        }

        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.editCrawlerNameWithID,
            newCrawler.crawlerID,
            newCrawler.crawlerUserName
        );
    }
};

const editCrawlerNameWithEmail = async (response, newCrawler) => {
    if (
        errorHandler.jsonChecker(
            response,
            newCrawler,
            ['crawlerEmail', 'crawlerUserName']
        )
    ){
        const crawler = await errorHandler.queryWrapper(
            response,
            crawlerRepository.getUserWithEmail,
            newCrawler.crawlerEmail
        );

        if (response.statusCode === 500){
            return errorHandler.throwAlert(`No crawler is registered with email: ${crawler.crawlerEmail}`);
        }

        const userNameCount = await errorHandler.queryWrapper(
            response,
            crawlerRepository.isUsernameAvailable,
            newCrawler.crawlerUserName
        );

        if (response.statusCode === 500){
            // No reason for this one.
            return;
        }

        if (userNameCount.count !== "0"){
            return errorHandler.throwAlert(`Username: ${newCrawler.crawlerUserName}, is in use.`);
        }

        return await errorHandler.queryWrapper(
            response,
            crawlerRepository.editCrawlerNameWithEmail,
            newCrawler.crawlerEmail,
            newCrawler.crawlerUserName
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