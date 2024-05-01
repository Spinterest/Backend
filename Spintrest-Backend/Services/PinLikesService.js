const pinLikesRepository = require('../Repositories/PinLikesRepository');

const likePin = async (pinLike) => {
    return await pinLikesRepository.likePin(pinLike);
}

const removeLikeFromPin = async (pinLike) => {
    return await pinLikesRepository.removeLikeFromPin(pinLike);
}

module.exports = {
    likePin,
    removeLikeFromPin
};