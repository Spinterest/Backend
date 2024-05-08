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
        const result = await errorHandler.queryWrapper(
            response,
            commentLikesRepository.isCommentLikePairUnique,
            commentLike
        );

        if (response.statusCode === 500){
            // unhandled unexpected error
            return;
        }

        if (result.result === 'false'){
            return errorHandler.throwAlert('Pair already existed');
        }

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
        const result = await errorHandler.queryWrapper(
            response,
            commentLikesRepository.isCommentLikePairUnique,
            commentLike
        );

        if (response.statusCode === 500){
            // unhandled unexpected error
            return;
        }

        if (result.result === 'true'){
            return errorHandler.throwAlert('Pair never existed');
        }

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