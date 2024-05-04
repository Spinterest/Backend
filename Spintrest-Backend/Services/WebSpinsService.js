const queryWrapper = require('../SQLErrorHandler');
const webSpinsRepository = require('../Repositories/WebSpinsRepository');

const addSpinToWeb = async (response, webSpin) => {
    return await queryWrapper(
        response,
        webSpinsRepository.addSpinToWeb,
        webSpin
    );
}

const removeSpinFromWeb = async (response, webSpin) => {
    return await queryWrapper(
        response,
        webSpinsRepository.removeSpinFromWeb,
        webSpin
    );
}

module.exports = {
    addSpinToWeb,
    removeSpinFromWeb
};