const googleUserRepository = require('../Repositories/GoogleUserRepository');

const getUserWithID = async (googleUserID) => {
    return await googleUserRepository.getUserWithID(googleUserID);
};

const getUserWithEmail = async (googleUserEmail) => {
    return await googleUserRepository.getUserWithEmail(googleUserEmail);
};

const deleteUserWithID = async (googleUserID) => {
    return await googleUserRepository.deleteUserWithID(googleUserID);
};

const deleteUserWithEmail = async (googleUserEmail) => {
    return await googleUserRepository.deleteUserWithEmail(googleUserEmail);
};

const login = async (googleUserEmail) => {
    let googleUser = await googleUserRepository.getUserWithEmail(googleUserEmail);
    if (!googleUser) {
        // We are checking again to see if they exist but their account is deleted
        googleUser = await googleUserRepository.getUserWithEmail(googleUserEmail, true);
        if (googleUser) {
            await googleUserRepository.restoreUserWithEmail(googleUserEmail);
        }
        else {
            await googleUserRepository.addUserWithEmail(googleUserEmail);
        }

        googleUser = await googleUserRepository.getUserWithEmail(googleUserEmail);
    }

    return googleUser;
}

module.exports = {
    getUserWithID,
    getUserWithEmail,
    login,
    deleteUserWithID,
    deleteUserWithEmail
};