const databaseContext = require('../Data/databaseContext');
const userRepositories = require('./GoogleUserRepository');
const boardModel = require('../Models/BoardModel');

const getBoardWithID = async (boardID) => {
    const result = await databaseContext.query(
        `select * 
        from Board 
        where boardID = ${boardID};`
    );
    return boardModel(result.rows);
};

const createBoard = async (board) => {
    return await databaseContext.query(
        `insert into 
            Board (googleUserID, boardTitle)
        values (
            ${board.googleUserID},
            '${board.boardTitle}'
        );`
    );
}

const getUserBoardsWithUserID = async (googleUserID) => {
    const result = await databaseContext.query(
        `select * 
        from Board 
        where 
            googleUserID = ${googleUserID} and 
            boardIsDeleted = false;`
    );
    return boardModel(result.rows);
};

const getUserBoardsWithUserEmail = async (googleUserEmail) => {
    const googleUser = await userRepositories.getUserWithEmail(googleUserEmail);
    if (googleUser) {
        const result = await databaseContext.query(
            `select * 
            from Board 
            where 
                googleUserID = ${googleUser.googleUserID} and 
                boardIsDeleted = false;`
        );
        return boardModel(result.rows);
    }
    return null;
};

const deleteUserBoardsWithUserID = async (googleUserID) => {
    return await databaseContext.query(
        `update Board 
        set boardIsDeleted = true
        where googleUserID = ${googleUserID};`
    );
};

const deleteUserBoardsWithUserEmail = async (googleUserEmail) => {
    const googleUser = await userRepositories.getUserWithEmail(googleUserEmail);
    if (googleUser) {
        return await databaseContext.query(
            `update Board 
            set boardIsDeleted = true
            where googleUserID = ${googleUser.googleUserID};`
        );
    }
    return null;
};

const deleteBoardWithID = async (boardID) => {
    return await databaseContext.query(
        `update Board
        set boardIsDeleted = true
        where boardID = ${boardID};`
    );
}

module.exports = {
    getBoardWithID,
    getUserBoardsWithUserID,
    getUserBoardsWithUserEmail,
    deleteBoardWithID,
    deleteUserBoardsWithUserID,
    deleteUserBoardsWithUserEmail,
    createBoard
};