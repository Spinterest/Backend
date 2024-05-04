const errorHandler = require('../SQLErrorHandler');
const commentLikesRepository = require('../Repositories/CommentLikesRepository');

const likeComment = async (response, commentLike) => {
    if (
        errorHandler.jsonChecker(
            response,
            commentLike,
            ['crawlerID', 'spinCommentID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            commentLikesRepository.likeComment,
            commentLike
        );
    }
}

const removeLikeFromComment = async (response, commentLike) => {
    if (
        errorHandler.jsonChecker(
            response,
            commentLike,
            ['crawlerID', 'spinCommentID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            commentLikesRepository.removeLikeFromComment,
            commentLike
        );
    }
}

module.exports = {
    likeComment,
    removeLikeFromComment
};