const databaseContext = require('../Data/databaseContext');
const googleUserModel = require('../Models/GoogleUserModel');

const getUserWithID = async (googleUserID) => {
    const result = await databaseContext.query(`select * from GoogleUser where googleUserID = ${googleUserID};`);
    return googleUserModel(result.rows);
};

const getUserWithEmail = async (googleUserEmail) => {
    const result = await databaseContext.query(`select * from GoogleUser where googleUserEmail = '${googleUserEmail}';`);
    return googleUserModel(result.rows);
};

module.exports = {
    getUserWithID, 
    getUserWithEmail
};