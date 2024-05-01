const mapper = require('./ModelMapper');

const mapCommentLikes = (commentLike) => {
    return {
        commentLikeID: commentLike.commentlikeid !== undefined ? commentLike.commentlikeid : commentLike.commentLikeID,
        googleUserID: commentLike.googleuserid !== undefined ? commentLike.googleuserid : commentLike.googleUserID,
        pinCommentID: commentLike.pincommentid !== undefined ? commentLike.pincommentid : commentLike.pinCommentID
    }
}

const CommentLikes = (CommentLikes) => {
    return mapper(CommentLikes, mapCommentLikes);
}

module.exports = CommentLikes;