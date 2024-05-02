const databaseContext = require('../Data/databaseContext');

const Pin = require('../Models/PinModel');
const Board = require('../Models/BoardModel');
const GoogleUser = require('../Models/GoogleUserModel');
const PinComment = require('../Models/PinCommentModel');

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

    return GoogleUser(result.rows);
};

const getCommentsForPin = async (pinID) => {
    const result = await databaseContext.query(
        `select pc.*
        from
            PinComment as pc
            inner join Pin as p on p.pinID = pc.pinID
        where
            pc.pinCommentIsDeleted = false and
            p.pinIsDeleted = false and
            pc.pinID = ${pinID};`
    );

    return PinComment(result.rows);
};

const getPinsForBoard = async (
    boardID,
    isLimited
) => {
    const limitText = isLimited ? 'limit 4' : '';
    const result = await databaseContext.query(
        `select p.*
        from
            Pin as p
            inner join BoardPins as bp on p.pinID = bp.pinID
            inner join Board as b on b.boardID = bp.boardID
        where
            p.pinIsDeleted = false and
            b.boardIsDeleted = false and
            b.boardID = ${boardID}
        ${limitText};`
    );

    return Pin(result.rows);
};

const getNumberOfPinsInBoard = async (boardID) => {
    const result = await databaseContext.query(
        `select count 
            (*) as count
        from
            Pin as p
            inner join BoardPins as bp on p.pinID = bp.pinID
            inner join Board as b on b.boardID = bp.boardID
        where
            p.pinIsDeleted = false and
            b.boardIsDeleted = false and
            b.boardID = ${boardID};`
    );

    return result.rows[0];
};

const getBoardsForUser = async (googleUserID) => {
    const result = await databaseContext.query(
        `select b.*
        from
            Board as b
            inner join GoogleUser as u on u.googleUserID = b.googleUserID
        where
            b.boardIsDeleted = false and
            b.googleUserID = ${googleUserID};`
    );

    return Board(result.rows);
};

const getUserFeed = async (
    googleUserID,
    isLikedTags,
    offset,
    limit
) => {
    const notString = isLikedTags ? '' : 'not'
    const result = await databaseContext.query(
        `select
            p.pinID,
            min(p.pinLink) as pinLink
        from
            Pin as p
            inner join PinTags as pt on p.pinID = pt.pinID
            inner join Tag as t on t.tagID = pt.tagID
        where
            p.pinIsDeleted = false and
            t.tagName ${notString} in (
                select * 
                from getUserLikedTags(${googleUserID})
            )
        group by
            p.pinID
        limit ${limit}
        offset ${offset};`
    );

    return Pin(result.rows);
};

module.exports = {
    getUserFeed,
    getPinsForBoard,
    getBoardsForUser,
    getCommentsForPin,
    getUsersWhoLikedPin,
    getNumberOfPinsInBoard,
    getUsersWhoLikedComment
};