const commentLikesRepository = require('../Repositories/CommentLikesRepository');

const likeComment = async (commentLike) => {
    return await commentLikesRepository.likeComment(commentLike);
}

const removeLikeFromComment = async (commentLike) => {
    return await commentLikesRepository.removeLikeFromComment(commentLike);
}

module.exports = {
    likeComment,
    removeLikeFromComment
};