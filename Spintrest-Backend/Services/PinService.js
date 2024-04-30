const pinRepository = require('../Repositories/PinRepository');

const getPinWithID = async (pinID) => {
    return pinRepository.getPinWithID(pinID);
};

const getUserPinsWithUserID = async (googleUserID) => {
    return pinRepository.getUserPinsWithUserID(googleUserID);
};

const getUserPinsWithUserEmail = async (googleUserEmail) => {
    return pinRepository.getUserPinsWithUserEmail(googleUserEmail);
};

module.exports = {
    getPinWithID,
    getUserPinsWithUserID,
    getUserPinsWithUserEmail
};