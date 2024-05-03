const spinRepository = require('../Repositories/SpinRepository');

const getSpinWithID = async (spinID) => {
    return spinRepository.getSpinWithID(spinID);
};

const deleteSpinWithID = async (spinID) => {
    return spinRepository.deleteSpinWithID(spinID);
};

const getUserSpinsWithUserID = async (crawlerID) => {
    return spinRepository.getUserSpinsWithUserID(crawlerID);
};

const getUserSpinsWithUserEmail = async (crawlerEmail) => {
    return spinRepository.getUserSpinsWithUserEmail(crawlerEmail);
};

const deleteUserSpinsWithUserID = async (crawlerID) => {
    return spinRepository.deleteUserSpinsWithUserID(crawlerID);
};

const deleteUserSpinsWithUserEmail = async (crawlerEmail) => {
    return spinRepository.deleteUserSpinsWithUserEmail(crawlerEmail);
};

const createSpin = async (spin) => {
    return spinRepository.createSpin(spin);
};

module.exports = {
    getSpinWithID,
    getUserSpinsWithUserID,
    getUserSpinsWithUserEmail,
    deleteSpinWithID,
    deleteUserSpinsWithUserID,
    deleteUserSpinsWithUserEmail,
    createSpin
};