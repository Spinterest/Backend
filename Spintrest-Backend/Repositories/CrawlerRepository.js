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
    const result = await databaseContext.query(
        `insert into 
        Crawler (crawlerEmail) 
        values ('${crawlerEmail}');`
    );
    return result;
}

const deleteUserWithID = async (crawlerID) => {
    const result = await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = true
        where crawlerID = ${crawlerID};`
    );
    return result;
}

const deleteUserWithEmail = async (crawlerEmail) => {
    const result = await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = true
        where crawlerEmail = '${crawlerEmail}';`
    );
    return result;
}

const restoreUserWithID = async (crawlerID) => {
    const result = await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = false
        where crawlerID = ${crawlerID};`
    );
    return result;
}

const restoreUserWithEmail = async (crawlerEmail) => {
    const result = await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = false
        where crawlerEmail = '${crawlerEmail}';`
    );
    return result.rowCount;
}

module.exports = {
    getUserWithID, 
    getUserWithEmail,
    addUserWithEmail,
    deleteUserWithID,
    deleteUserWithEmail,
    restoreUserWithEmail,
    restoreUserWithID
};