const databaseContext = require('../Data/databaseContext');
const pinCommentModel = require("../Models/PinCommentModel");

const makeCommentToPin = async (pinComment) => {
    return await databaseContext.query(
        `insert into 
            PinComment (
                googleUserID, 
                pinID, 
                pinCommentMessage
            )
        values (
            ${pinComment.googleUserID},
            ${pinComment.pinID},
            '${pinComment.pinCommentMessage}'
        );`
    );
};

const getPinCommentWithID = async (pinCommentID) => {
    const result = await databaseContext.query(
        `select * 
        from PinComment 
        where pinCommentID = ${pinCommentID};`
    );

    return pinCommentModel(result.rows);
};

const getCommentsForPinWithPinID = async (
    pinID,
    pinCommentIsDeleted = false
) => {
    const result = await databaseContext.query(
        `select * 
        from PinComment 
        where 
            pinID = ${pinID} and
            pinCommentIsDeleted = ${pinCommentIsDeleted}`
    );
    return pinCommentModel(result.rows);
};

const deletePinCommentWithID = async (pinCommentID) => {
    return await databaseContext.query(
        `update PinComment
        set pinCommentIsDeleted = true
        where pinCommentID = ${pinCommentID};`
    );
}

module.exports = {
    makeCommentToPin,
    getPinCommentWithID,
    getCommentsForPinWithPinID,
    deletePinCommentWithID
};