const mapper = require('./ModelMapper');

const mapBoard = (board) => {
    return {
        boardID: board.boardid !== undefined ? board.boardid : board.boardID,
        googleUserID: board.googleuserid !== undefined ? board.googleuserid : board.googleUserID,
        boardTitle: board.boardtitle !== undefined ? board.boardtitle : board.boardTitle,
        boardDescription: board.boarddescription !== undefined ? board.boarddescription : board.boardDescription,
        boardIsDeleted: board.boardisdeleted !== undefined ? board.boardisdeleted : board.boardIsDeleted
    }
}

const Board = (boards) => {
    return mapper(boards, mapBoard);
}

module.exports = Board;