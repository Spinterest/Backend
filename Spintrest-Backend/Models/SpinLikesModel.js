const mapper = require('./ModelMapper');

const mapSpinLikes = (spinLike) => {
    return {
        spinLikeID: spinLike.spinlikeid !== undefined ? spinLike.spinlikeid : spinLike.spinLikeID,
        crawlerID: spinLike.crawleruserid !== undefined ? spinLike.crawleruserid : spinLike.crawlerID,
        spinID: spinLike.spinid !== undefined ? spinLike.spinid : spinLike.spinID
    }
}

const SpinLikes = (SpinLikes) => {
    return mapper(SpinLikes, mapSpinLikes);
}

module.exports = SpinLikes;