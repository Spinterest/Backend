const errorHandler = require('../SQLErrorHandler');
const webSpinsRepository = require('../Repositories/WebSpinsRepository');

const addSpinToWeb = async (response, webSpin) => {
    if (
        errorHandler.jsonChecker(
            response,
            webSpin,
            ['spinID', 'webID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webSpinsRepository.addSpinToWeb,
            webSpin
        );
    }
}

const removeSpinFromWeb = async (response, webSpin) => {
    if (
        errorHandler.variableChecker(
            response,
            webSpin,
            ['spinID', 'webID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            webSpinsRepository.removeSpinFromWeb,
            webSpin
        );
    }
}

module.exports = {
    addSpinToWeb,
    removeSpinFromWeb
};