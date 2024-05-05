const databaseContext = require('../Data/databaseContext');
const crawlerModel = require('../Models/CrawlerModel');

const getUserWithID = async (
    crawlerID,
    crawlerIsDeleted = false
) => {
    const result = await databaseContext.query(
        `select * 
    from Crawler 
    where 
        crawlerID = ${crawlerID} and
        crawlerIsDeleted = ${crawlerIsDeleted};`
    );
    return crawlerModel(result.rows);
};

const getUserWithEmail = async (
    crawlerEmail,
    crawlerIsDeleted = false
) => {
    const result = await databaseContext.query(
        `select *
         from Crawler 
         where 
            crawlerEmail = '${crawlerEmail}' and
            crawlerIsDeleted = ${crawlerIsDeleted};`
    );
    return crawlerModel(result.rows);
};

const addUserWithEmail = async (crawlerEmail) => {
    const crawlerUserName = crawlerEmail?.split('@')[0] || crawlerEmail;
    return await databaseContext.query(
        `insert into 
        Crawler (crawlerEmail, crawlerUserName) 
        values ('${crawlerEmail}', '${crawlerUserName}');`
    );
}

const deleteUserWithID = async (crawlerID) => {
    return await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = true
        where crawlerID = ${crawlerID};`
    );
}

const deleteUserWithEmail = async (crawlerEmail) => {
    return await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = true
        where crawlerEmail = '${crawlerEmail}';`
    );
}

const restoreUserWithID = async (crawlerID) => {
    return await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = false
        where crawlerID = ${crawlerID};`
    );
}

const restoreUserWithEmail = async (crawlerEmail) => {
    return await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = false
        where crawlerEmail = '${crawlerEmail}';`
    );
}

const editCrawlerNameWithID = async (
    crawlerID,
    crawlerUserName
) => {
    return await databaseContext.query(
        `update Crawler
        set crawlerUserName = '${crawlerUserName}'
        where crawlerID = '${crawlerID}';`
    );
}

const editCrawlerNameWithEmail = async (
    crawlerEmail,
    crawlerUserName
) => {
    return await databaseContext.query(
        `update Crawler
        set crawlerUserName = '${crawlerUserName}'
        where crawlerEmail = '${crawlerEmail}';`
    );
}

module.exports = {
    getUserWithID, 
    getUserWithEmail,
    addUserWithEmail,
    deleteUserWithID,
    deleteUserWithEmail,
    restoreUserWithEmail,
    restoreUserWithID,
    editCrawlerNameWithID,
    editCrawlerNameWithEmail
};