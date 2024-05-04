const errorHandler = require('../SQLErrorHandler');
const spinLikesRepository = require('../Repositories/SpinLikesRepository');

const likeSpin = async (response, spinLike) => {
    if (
        errorHandler.variableChecker(
            response,
            spinLike,
            ['spinID', 'crawlerID']
        )
    ){
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