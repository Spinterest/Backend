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
    console.log(crawlerEmail);
    const crawlerUserName = crawlerEmail?.split('@')[0] || crawlerEmail;
    await databaseContext.query(
        `insert into 
        Crawler (crawlerEmail, crawlerUserName) 
        values ('${crawlerEmail}', '${crawlerUserName}');`
    );

    return await getUserWithEmail(crawlerEmail);
}

const deleteUserWithID = async (crawlerID) => {
    await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = true
        where crawlerID = ${crawlerID};`
    );

    return await getUserWithID(crawlerID, true);
}

const deleteUserWithEmail = async (crawlerEmail) => {
    await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = true
        where crawlerEmail = '${crawlerEmail}';`
    );

    return await getUserWithEmail(crawlerEmail, true);
}

const restoreUserWithID = async (crawlerID) => {
    await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = false
        where crawlerID = ${crawlerID};`
    );

    return await getUserWithID(crawlerID);
}

const restoreUserWithEmail = async (crawlerEmail) => {
    await databaseContext.query(
        `update Crawler
        set crawlerIsDeleted = false
        where crawlerEmail = '${crawlerEmail}';`
    );

    return await getUserWithEmail(crawlerEmail);
}

const editCrawlerNameWithID = async (
    crawlerID,
    crawlerUserName
) => {
    await databaseContext.query(
        `update Crawler
        set crawlerUserName = '${crawlerUserName}'
        where crawlerID = '${crawlerID}';`
    );

    return await getUserWithID(crawlerID);
}

const editCrawlerNameWithEmail = async (
    crawlerEmail,
    crawlerUserName
) => {
    await databaseContext.query(
        `update Crawler
        set crawlerUserName = '${crawlerUserName}'
        where crawlerEmail = '${crawlerEmail}';`
    );

    return await getUserWithEmail(crawlerEmail);
}

const isUsernameAvailable = async (crawlerUserName) => {
    const result = await databaseContext.query(
        `select count(*) as count
        from Crawler
        where crawlerUserName = '${crawlerUserName}';`
    );

    return result.rows[0];
}

module.exports = {
    getUserWithID, 
    getUserWithEmail,
    addUserWithEmail,
    deleteUserWithID,
    restoreUserWithID,
    isUsernameAvailable,
    deleteUserWithEmail,
    restoreUserWithEmail,
    editCrawlerNameWithID,
    editCrawlerNameWithEmail
};