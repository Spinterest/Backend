const databaseContext = require('../Data/databaseContext');

const likeComment = async (commentLike) => {
    return await databaseContext.query(
        `insert into 
        CommentLikes (crawlerID, spinCommentID) 
        values (${commentLike.crawlerID}, ${commentLike.spinCommentID});`
    );
};

const removeLikeFromComment = async (commentLike) => {
    return await databaseContext.query(
        `delete from CommentLikes  
        where 
            crawlerID = ${commentLike.crawlerID} and 
            spinCommentID = ${commentLike.spinCommentID};`
    );
};

module.exports = {
    likeComment,
    removeLikeFromComment
};