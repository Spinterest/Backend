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

const isCommentLikePairUnique = async (commentLike) => {
    const result = await databaseContext.query(
        `select
            case
                when count(*) = 0 then 'true'
                else 'false'
            end as result
        from
            CommentLikes
        where
            crawlerID = ${commentLike.crawlerID} and 
            spinCommentID = ${commentLike.spinCommentID};`
    );

    return result.rows[0];
}

module.exports = {
    likeComment,
    removeLikeFromComment,
    isCommentLikePairUnique
};