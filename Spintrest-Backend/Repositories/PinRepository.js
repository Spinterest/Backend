const databaseContext = require('../Data/databaseContext');
const userRepositories = require('./GoogleUserRepository');
const pinModel = require('../Models/PinModel');

const getPinWithID = async (pinID) => {
    const result = await databaseContext.query(
        `select * 
        from Pin 
        where pinID = ${pinID};`
    );
    return pinModel(result.rows);
};

const getUserPinsWithUserID = async (googleUserID) => {
    const result = await databaseContext.query(
        `select * 
        from Pin 
        where 
            googleUserID = ${googleUserID} and 
            pinIsDeleted = false;`
    );
    return pinModel(result.rows);
};

const getUserPinsWithUserEmail = async (googleUserEmail) => {
    const googleUser = await userRepositories.getUserWithEmail(googleUserEmail);
    if (googleUser) {
        const result = await databaseContext.query(
            `select * 
            from Pin 
            where 
                googleUserID = ${googleUser.googleUserID} and 
                pinIsDeleted = false;`
        );
        return pinModel(result.rows);
    }
    return null;
};

const deleteUserPinsWithUserID = async (googleUserID) => {
    return await databaseContext.query(
        `update Pin 
        set pinIsDeleted = true
        where googleUserID = ${googleUserID};`
    );
};

const deleteUserPinsWithUserEmail = async (googleUserEmail) => {
    const googleUser = await userRepositories.getUserWithEmail(googleUserEmail);
    if (googleUser) {
        return await databaseContext.query(
            `update Pin 
            set pinIsDeleted = true
            where googleUserID = ${googleUser.googleUserID};`
        );
    }
    return null;
};

const deletePinWithID = async (pinID) => {
    return await databaseContext.query(
        `update Pin
        set pinIsDeleted = true
        where pinID = ${pinID};`
    );
}

// Todo, add something for homepage infinity scroll

module.exports = {
    getPinWithID,
    getUserPinsWithUserID,
    getUserPinsWithUserEmail,
    deletePinWithID,
    deleteUserPinsWithUserID,
    deleteUserPinsWithUserEmail
};