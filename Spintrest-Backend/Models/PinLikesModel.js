const mapper = require('./ModelMapper');

const mapPinLikes = (pinLike) => {
    return {
        pinLikeID: pinLike.pinlikeid !== undefined ? pinLike.pinlikeid : pinLike.pinLikeID,
        googleUserID: pinLike.googleuserid !== undefined ? pinLike.googleuserid : pinLike.googleUserID,
        pinID: pinLike.pinid !== undefined ? pinLike.pinid : pinLike.pinID
    }
}

const PinLikes = (PinLikes) => {
    return mapper(PinLikes, mapPinLikes);
}

module.exports = PinLikes;