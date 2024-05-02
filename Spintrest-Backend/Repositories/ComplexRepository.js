const databaseContext = require('../Data/databaseContext');
const GoogleUser = require('../Models/GoogleUserModel');
const complexModels = require('../Models/ComplexModels');

const getUsersWhoLikedComment = async (pinCommentID) => {
    const result = await databaseContext.query(
        `select
            u.googleUserID,
            u.googleUserEmail
        from
            CommentLikes as cl
            inner join PinComment as pc on cl.pinCommentID = pc.pinCommentID
            inner join GoogleUser as u on cl.googleUserID = u.googleUserID
        where
            pc.pinCommentIsDeleted = false and
            cl.pinCommentID = ${pinCommentID};`
    );

    return  GoogleUser(result.rows);
};

const getUsersWhoLikedPin = async (pinID) => {
    const result = await databaseContext.query(
        `select
            u.googleUserID,
            u.googleUserEmail
        from
            PinLikes as pl
            inner join Pin as p on p.pinID = pl.pinID
            inner join GoogleUser as u on pl.googleUserID = u.googleUserID
        where
            p.pinIsDeleted = false and
            pl.pinID = ${pinID};`
    );

    return  GoogleUser(result.rows);
};

module.exports = {
    getUsersWhoLikedComment,
    getUsersWhoLikedPin
};