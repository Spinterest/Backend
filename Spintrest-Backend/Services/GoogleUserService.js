const googleUserRepository = require('../Repositories/GoogleUserRepository');

const getUserWithID = async (googleUserID) => {
    return await googleUserRepository.getUserWithID(googleUserID);
};

const getUserWithEmail = async (googleUserEmail) => {
    return await googleUserRepository.getUserWithEmail(googleUserEmail);
};

const login = async (googleUserEmail) => {
    let googleUser = await googleUserRepository.getUserWithEmail(googleUserEmail);
    if (!googleUser) {
        await googleUserRepository.addUserWithEmail(googleUserEmail);
        googleUser = await googleUserRepository.getUserWithEmail(googleUserEmail);
    }

    return googleUser;
}

module.exports = {
    getUserWithID,
    getUserWithEmail,
    login
};