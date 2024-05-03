const databaseContext = require('../Data/databaseContext');
const spinCommentModel = require("../Models/SpinCommentModel");

const makeCommentToSpin = async (spinComment) => {
    return await databaseContext.query(
        `insert into 
            SpinComment (
                crawlerID, 
                spinID, 
                spinCommentMessage
            )
        values (
            ${spinComment.crawlerID},
            ${spinComment.spinID},
            '${spinComment.spinCommentMessage}'
        );`
    );
};

const getSpinCommentWithID = async (spinCommentID) => {
    const result = await databaseContext.query(
        `select * 
        from SpinComment 
        where spinCommentID = ${spinCommentID};`
    );

    return spinCommentModel(result.rows);
};

const getCommentsForSpinWithSpinID = async (
    spinID,
    spinCommentIsDeleted = false
) => {
    const result = await databaseContext.query(
        `select * 
        from SpinComment 
        where 
            spinID = ${spinID} and
            spinCommentIsDeleted = ${spinCommentIsDeleted}`
    );
    return spinCommentModel(result.rows);
};

const deleteSpinCommentWithID = async (spinCommentID) => {
    return await databaseContext.query(
        `update SpinComment
        set spinCommentIsDeleted = true
        where spinCommentID = ${spinCommentID};`
    );
}

module.exports = {
    makeCommentToSpin,
    getSpinCommentWithID,
    getCommentsForSpinWithSpinID,
    deleteSpinCommentWithID
};