const databaseContext = require('../Data/databaseContext');
const userRepositories = require('./CrawlerRepository');
const spinModel = require('../Models/SpinModel');

const getSpinWithID = async (spinID) => {
    const result = await databaseContext.query(
        `select * 
        from Spin 
        where spinID = ${spinID};`
    );
    return spinModel(result.rows);
};

const createSpin = async (spin) => {
    return await databaseContext.query(
        `insert into 
            Spin (crawlerID, spinTitle, spinDescription, spinLink)
        values (
            ${spin.crawlerID},
            '${spin.spinTitle}',
            '${spin.spinDescription}',
            '${spin.spinLink}'    
        );`
    );
}

const getUserSpinsWithUserID = async (crawlerID) => {
    const result = await databaseContext.query(
        `select * 
        from Spin 
        where 
            crawlerID = ${crawlerID} and 
            spinIsDeleted = false;`
    );
    return spinModel(result.rows);
};

const getUserSpinsWithUserEmail = async (crawlerEmail) => {
    const crawler = await userRepositories.getUserWithEmail(crawlerEmail);
    if (crawler) {
        const result = await databaseContext.query(
            `select * 
            from Spin 
            where 
                crawlerID = ${crawler.crawlerID} and 
                spinIsDeleted = false;`
        );
        return spinModel(result.rows);
    }
    return null;
};

const deleteUserSpinsWithUserID = async (crawlerID) => {
    return await databaseContext.query(
        `update Spin 
        set spinIsDeleted = true
        where crawlerID = ${crawlerID};`
    );
};

const deleteUserSpinsWithUserEmail = async (crawlerEmail) => {
    const crawler = await userRepositories.getUserWithEmail(crawlerEmail);
    if (crawler) {
        return await databaseContext.query(
            `update Spin 
            set spinIsDeleted = true
            where crawlerID = ${crawler.crawlerID};`
        );
    }
    return null;
};

const deleteSpinWithID = async (spinID) => {
    return await databaseContext.query(
        `update Spin
        set spinIsDeleted = true
        where spinID = ${spinID};`
    );
}

// Todo, add something for homepage infinity scroll

module.exports = {
    getSpinWithID,
    getUserSpinsWithUserID,
    getUserSpinsWithUserEmail,
    deleteSpinWithID,
    deleteUserSpinsWithUserID,
    deleteUserSpinsWithUserEmail,
    createSpin
};