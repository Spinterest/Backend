const queryWrapper = require('../SQLErrorHandler');
const spinRepository = require('../Repositories/SpinRepository');

const getSpinWithID = async (response, spinID) => {
    return await queryWrapper(
        response,
        spinRepository.getSpinWithID,
        spinID
    );
};

const deleteSpinWithID = async (response, spinID) => {
    return await queryWrapper(
        response,
        spinRepository.deleteSpinWithID,
        spinID
    );
};

const getUserSpinsWithUserID = async (response, crawlerID) => {
    return await queryWrapper(
        response,
        spinRepository.getUserSpinsWithUserID,
        crawlerID
    );
};

const getUserSpinsWithUserEmail = async (response, crawlerEmail) => {
    return await queryWrapper(
        response,
        spinRepository.getUserSpinsWithUserEmail,
        crawlerEmail
    );
};

const deleteUserSpinsWithUserID = async (response, crawlerID) => {
    return await queryWrapper(
        response,
        spinRepository.deleteUserSpinsWithUserID,
        crawlerID
    );
};

const deleteUserSpinsWithUserEmail = async (response, crawlerEmail) => {
    return await queryWrapper(
        response,
        spinRepository.deleteUserSpinsWithUserEmail,
        crawlerEmail
    );
};

const createSpin = async (response, spin) => {
    return await queryWrapper(
        response,
        spinRepository.createSpin,
        spin
    );
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