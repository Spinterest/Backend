const queryWrapper = require('../SQLErrorHandler');
const commentLikesRepository = require('../Repositories/CommentLikesRepository');

const likeComment = async (response, commentLike) => {
    return await queryWrapper(
        response,
        commentLikesRepository.likeComment,
        commentLike
    );
}

const removeLikeFromComment = async (response, commentLike) => {
    return await queryWrapper(
        response,
        commentLikesRepository.removeLikeFromComment,
        commentLike
    );
}

module.exports = {
    likeComment,
    removeLikeFromComment
};