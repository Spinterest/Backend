const queryWrapper = require('../SQLErrorHandler');
const spinLikesRepository = require('../Repositories/SpinLikesRepository');

const likeSpin = async (response, spinLike) => {
    return await queryWrapper(
        response,
        spinLikesRepository.likeSpin,
        spinLike
    );
}

const removeLikeFromSpin = async (response, spinLike) => {
    return await queryWrapper(
        response,
        spinLikesRepository.removeLikeFromSpin,
        spinLike
    );
}

module.exports = {
    likeSpin,
    removeLikeFromSpin
};