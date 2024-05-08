const errorHandler = require('../SQLErrorHandler');
const spinLikesRepository = require('../Repositories/SpinLikesRepository');
const webSpinsRepository = require("../Repositories/WebSpinsRepository");

const likeSpin = async (response, spinLike) => {
    if (
        errorHandler.variableChecker(
            response,
            spinLike,
            ['spinID', 'crawlerID']
        )
    ){
        const result = await errorHandler.queryWrapper(
            response,
            spinLikesRepository.isSpinLikePairUnique,
            spinLike
        );

        if (response.statusCode === 500){
            // unhandled unexpected error
            return;
        }

        if (result.result === 'false'){
            return errorHandler.throwAlert('Pair already existed');
        }

        return await errorHandler.queryWrapper(
            response,
            spinLikesRepository.likeSpin,
            spinLike
        );
    }
}

const removeLikeFromSpin = async (response, spinLike) => {
    if (
        errorHandler.variableChecker(
            response,
            spinLike,
            ['spinID', 'crawlerID']
        )
    ){
        const result = await errorHandler.queryWrapper(
            response,
            spinLikesRepository.isSpinLikePairUnique,
            spinLike
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
            spinLikesRepository.removeLikeFromSpin,
            spinLike
        );
    }
}

module.exports = {
    likeSpin,
    removeLikeFromSpin
};