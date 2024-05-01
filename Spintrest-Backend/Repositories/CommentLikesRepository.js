const databaseContext = require('../Data/databaseContext');

const likeComment = async (commentLike) => {
    return await databaseContext.query(
        `insert into 
        CommentLikes (googleUserID, pinCommentID) 
        values (${commentLike.googleUserID}, ${commentLike.pinCommentID});`
    );
};

const removeLikeFromComment = async (commentLike) => {
    return await databaseContext.query(
        `delete from CommentLikes  
        where 
            googleUserID = ${commentLike.googleUserID} and 
            pinCommentID = ${commentLike.pinCommentID};`
    );
};

module.exports = {
    likeComment,
    removeLikeFromComment
};