const mapper = require('./ModelMapper');

const mapCommentLikes = (commentLike) => {
    return {
        commentLikeID: commentLike.commentlikeid !== undefined ? commentLike.commentlikeid : commentLike.commentLikeID,
        crawlerID: commentLike.crawlerid !== undefined ? commentLike.crawlerid : commentLike.crawlerID,
        spinCommentID: commentLike.spincommentid !== undefined ? commentLike.spincommentid : commentLike.spinCommentID
    }
}

const CommentLikes = (CommentLikes) => {
    return mapper(CommentLikes, mapCommentLikes);
}

module.exports = CommentLikes;