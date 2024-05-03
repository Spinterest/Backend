const mapper = require('./ModelMapper');

const mapPinComment = (pinComment) => {
    return {
        pinID: pinComment.pinid !== undefined ? pinComment.pinid : pinComment.pinID,
        pinCommentID: pinComment.pincommentid !== undefined ? pinComment.pincommentid : pinComment.pinCommentID,
        googleUserID: pinComment.googleuserid !== undefined ? pinComment.googleuserid : pinComment.googleUserID,
        pinCommentMessage: pinComment.pincommentmessage !== undefined ? pinComment.pincommentmessage : pinComment.pinCommentMessage,
        pinCommentTimestamp: pinComment.pincommenttimestamp !== undefined ? pinComment.pincommenttimestamp : pinComment.pinCommentTimestamp,
        pinCommentIsDeleted: pinComment.pincommentisdeleted !== undefined ? pinComment.pincommentisdeleted : pinComment.pinCommentIsDeleted
    }
}

const PinComment = (pinComments) => {
    return mapper(pinComments, mapPinComment);
}

module.exports = PinComment;