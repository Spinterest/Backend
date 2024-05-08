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
        const result = await errorHandler.queryWrapper(
            response,
            webSpinsRepository.isWebSpinPairUnique,
            webSpin
        );

        if (response.statusCode === 500){
            // unhandled unexpected error
            return;
        }

        if (result.result === 'false'){
            return errorHandler.throwAlert('Pair already exists');
        }

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
        const result = await errorHandler.queryWrapper(
            response,
            webSpinsRepository.isWebSpinPairUnique,
            webSpin
        );

        if (response.statusCode === 500){
            // unhandled unexpected error
            return;
        }

        if (result.result === 'true'){
            return errorHandler.throwAlert('Pair never existed');
        }

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