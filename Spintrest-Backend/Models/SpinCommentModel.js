const mapper = require('./ModelMapper');

const mapSpinComment = (spinComment) => {
    return {
        spinID: spinComment.spinid !== undefined ? spinComment.spinid : spinComment.spinID,
        spinCommentID: spinComment.spincommentid !== undefined ? spinComment.spincommentid : spinComment.spinCommentID,
        crawlerID: spinComment.crawlerid !== undefined ? spinComment.crawlerid : spinComment.crawlerID,
        spinCommentMessage: spinComment.spincommentmessage !== undefined ? spinComment.spincommentmessage : spinComment.spinCommentMessage,
        spinCommentTimestamp: spinComment.spincommenttimestamp !== undefined ? spinComment.spincommenttimestamp : spinComment.spinCommentTimestamp,
        spinCommentIsDeleted: spinComment.spincommentisdeleted !== undefined ? spinComment.spincommentisdeleted : spinComment.spinCommentIsDeleted,
        spinCommentLikeCount: spinComment.spincommentlikecount !== undefined ? spinComment.spincommentlikecount : spinComment.spinCommentLikeCount
    }
}

const SpinComment = (spinComments) => {
    return mapper(spinComments, mapSpinComment);
}

module.exports = SpinComment;