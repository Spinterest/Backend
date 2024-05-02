const mapper = require('./ModelMapper');

const mapSpinLikes = (spinLike) => {
    return {
        spinLikeID: spinLike.spinlikeid !== undefined ? spinLike.spinlikeid : spinLike.spinLikeID,
        googleUserID: spinLike.googleuserid !== undefined ? spinLike.googleuserid : spinLike.googleUserID,
        spinID: spinLike.spinid !== undefined ? spinLike.spinid : spinLike.spinID
    }
}

const SpinLikes = (SpinLikes) => {
    return mapper(SpinLikes, mapSpinLikes);
}

module.exports = SpinLikes;