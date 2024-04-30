const databaseContext = require('../Data/databaseContext');
const userRepositories = require('./GoogleUserRepository');
const pinModel = require('../Models/PinModel');

const getPinWithID = async (pinID) => {
    const result = await databaseContext.query(
        `select * 
        from Pin 
        where pinID = ${pinID};`);
    return pinModel(result.rows);
};

const getUserPinsWithUserID = async (googleUserID) => {
    const result = await databaseContext.query(
        `select * 
        from Pin 
        where googleUserID = ${googleUserID};`);
    return pinModel(result.rows);
};

const getUserPinsWithUserEmail = async (googleUserEmail) => {
    const googleUser = await userRepositories.getUserWithEmail(googleUserEmail);
    if (googleUser) {
        const result = await databaseContext.query(
            `select * 
            from Pin 
            where googleUserID = ${googleUser.googleUserID};`);
        return pinModel(result.rows);
    }
    return null;
};

// Todo, add something for homepage infinity scroll

module.exports = {
    getPinWithID,
    getUserPinsWithUserID,
    getUserPinsWithUserEmail
};