const mapper = require('./ModelMapper');

const mapBoardPins = (boardPins) => {
    return {
        boardPinID: boardPins.boardpinid !== undefined ? boardPins.boardpinid : boardPins.boardPinID,
        boardID: boardPins.boardid !== undefined ? boardPins.boardid : boardPins.boardID,
        pinID: boardPins.pinid !== undefined ? boardPins.pinid : boardPins.pinID
    }
}

const PinTags = (BoardPins) => {
    return mapper(BoardPins, mapBoardPins);
}

module.exports = PinTags;