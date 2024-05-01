const pinRepository = require('../Repositories/PinRepository');

const getPinWithID = async (pinID) => {
    return pinRepository.getPinWithID(pinID);
};

const deletePinWithID = async (pinID) => {
    return pinRepository.deletePinWithID(pinID);
};

const getUserPinsWithUserID = async (googleUserID) => {
    return pinRepository.getUserPinsWithUserID(googleUserID);
};

const getUserPinsWithUserEmail = async (googleUserEmail) => {
    return pinRepository.getUserPinsWithUserEmail(googleUserEmail);
};

const deleteUserPinsWithUserID = async (googleUserID) => {
    return pinRepository.deleteUserPinsWithUserID(googleUserID);
};

const deleteUserPinsWithUserEmail = async (googleUserEmail) => {
    return pinRepository.deleteUserPinsWithUserEmail(googleUserEmail);
};

module.exports = {
    getPinWithID,
    getUserPinsWithUserID,
    getUserPinsWithUserEmail,
    deletePinWithID,
    deleteUserPinsWithUserID,
    deleteUserPinsWithUserEmail
};