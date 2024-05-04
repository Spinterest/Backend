const queryWrapper = require('../SQLErrorHandler');
const crawlerRepository = require('../Repositories/CrawlerRepository');

const getUserWithID = async (response, crawlerID) => {
    return await queryWrapper(
        response,
        crawlerRepository.getUserWithID,
        crawlerID
    );
};

const getUserWithEmail = async (response, crawlerEmail) => {
    return await queryWrapper(
        response,
        crawlerRepository.getUserWithEmail,
        crawlerEmail
    );
};

const deleteUserWithID = async (response, crawlerID) => {
    return await queryWrapper(
        response,
        crawlerRepository.deleteUserWithID,
        crawlerID
    );
};

const deleteUserWithEmail = async (response, crawlerEmail) => {
    return await queryWrapper(
        response,
        crawlerRepository.deleteUserWithEmail,
        crawlerEmail
    );
};

const editCrawlerNameWithID = async (response, crawler) => {
    return await queryWrapper(
        response,
        crawlerRepository.editCrawlerNameWithID,
        crawler.crawlerID,
        crawler.crawlerUserName
    );
};

const editCrawlerNameWithEmail = async (response, crawler) => {
    return await queryWrapper(
        response,
        crawlerRepository.editCrawlerNameWithEmail,
        crawler.crawlerEmail,
        crawler.crawlerUserName
    );
};

const login = async (response, crawlerEmail) => {
    let crawler = await queryWrapper(
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

module.exports = {
    getUserWithID,
    getUserWithEmail,
    login,
    deleteUserWithID,
    deleteUserWithEmail,
    editCrawlerNameWithID,
    editCrawlerNameWithEmail
};