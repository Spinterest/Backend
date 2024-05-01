const mapper = require('./ModelMapper');

const mapBoard = (board) => {
    return {
        boardID: board.boardid !== undefined ? board.boardid : board.boardID,
        googleUserID: board.googleuserid !== undefined ? board.googleuserid : board.googleUserID,
        boardIsDeleted: board.boardisdeleted !== undefined ? board.boardisdeleted : board.boardIsDeleted,
        boardTitle: board.boardtitle !== undefined ? board.boardtitle : board.boardTitle
    }
}

const Board = (boards) => {
    return mapper(boards, mapBoard);
}

module.exports = Board;