const spinLikesRepository = require('../Repositories/SpinLikesRepository');

const likeSpin = async (spinLike) => {
    return await spinLikesRepository.likeSpin(spinLike);
}

const removeLikeFromSpin = async (spinLike) => {
    return await spinLikesRepository.removeLikeFromSpin(spinLike);
}

module.exports = {
    likeSpin,
    removeLikeFromSpin
};