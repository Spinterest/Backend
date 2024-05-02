const databaseContext = require('../Data/databaseContext');
const userRepositories = require('./CrawlerRepository');
const webModel = require('../Models/WebModel');

const getWebWithID = async (webID) => {
    const result = await databaseContext.query(
        `select * 
        from Web 
        where webID = ${webID};`
    );
    return webModel(result.rows);
};

const createWeb = async (web) => {
    return await databaseContext.query(
        `insert into 
            Web (crawlerID, webTitle)
        values (
            ${web.crawlerID},
            '${web.webTitle}'
        );`
    );
}

const getUserWebsWithUserID = async (crawlerID) => {
    const result = await databaseContext.query(
        `select * 
        from Web 
        where 
            crawlerID = ${crawlerID} and 
            webIsDeleted = false;`
    );
    return webModel(result.rows);
};

const getUserWebsWithUserEmail = async (crawlerEmail) => {
    const crawler = await userRepositories.getUserWithEmail(crawlerEmail);
    if (crawler) {
        const result = await databaseContext.query(
            `select * 
            from Web 
            where 
                crawlerID = ${crawler.crawlerID} and 
                webIsDeleted = false;`
        );
        return webModel(result.rows);
    }
    return null;
};

const deleteUserWebsWithUserID = async (crawlerID) => {
    return await databaseContext.query(
        `update Web 
        set webIsDeleted = true
        where crawlerID = ${crawlerID};`
    );
};

const deleteUserWebsWithUserEmail = async (crawlerEmail) => {
    const crawler = await userRepositories.getUserWithEmail(crawlerEmail);
    if (crawler) {
        return await databaseContext.query(
            `update Web 
            set webIsDeleted = true
            where crawlerID = ${crawler.crawlerID};`
        );
    }
    return null;
};

const deleteWebWithID = async (webID) => {
    return await databaseContext.query(
        `update Web
        set webIsDeleted = true
        where webID = ${webID};`
    );
}

module.exports = {
    getWebWithID,
    getUserWebsWithUserID,
    getUserWebsWithUserEmail,
    deleteWebWithID,
    deleteUserWebsWithUserID,
    deleteUserWebsWithUserEmail,
    createWeb
};