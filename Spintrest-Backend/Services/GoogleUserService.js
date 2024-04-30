const googleUserRepository = require('../Repositories/GoogleUserRepository');

const getUserWithID = async (googleUserID) => {
    return await googleUserRepository.getUserWithID(googleUserID);
};

const getUserWithEmail = async (googleUserEmail) => {
    return await googleUserRepository.getUserWithEmail(googleUserEmail);
};

// const loginUser = async (googleUserEmail) => {
//     const result = await databaseContext.query(`select * from GoogleUser where googleUserEmail = '${googleUserEmail}';`);
//     return googleUserModel(result.rows);
// };

module.exports = {
    getUserWithID,
    getUserWithEmail
};