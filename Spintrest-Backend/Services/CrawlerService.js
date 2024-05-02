const crawlerRepository = require('../Repositories/CrawlerRepository');

const getUserWithID = async (crawlerID) => {
    return await crawlerRepository.getUserWithID(crawlerID);
};

const getUserWithEmail = async (crawlerEmail) => {
    return await crawlerRepository.getUserWithEmail(crawlerEmail);
};

const deleteUserWithID = async (crawlerID) => {
    return await crawlerRepository.deleteUserWithID(crawlerID);
};

const deleteUserWithEmail = async (crawlerEmail) => {
    return await crawlerRepository.deleteUserWithEmail(crawlerEmail);
};

const login = async (crawlerEmail) => {
    let crawler = await crawlerRepository.getUserWithEmail(crawlerEmail);
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
    deleteUserWithEmail
};