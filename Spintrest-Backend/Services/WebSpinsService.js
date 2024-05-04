const webSpinsRepository = require('../Repositories/WebSpinsRepository');

const addSpinToWeb = async (webSpin) => {
    return await webSpinsRepository.addSpinToWeb(webSpin);
}

const removeSpinFromWeb = async (webSpin) => {
    return await webSpinsRepository.removeSpinFromWeb(webSpin);
}

module.exports = {
    addSpinToWeb,
    removeSpinFromWeb
};