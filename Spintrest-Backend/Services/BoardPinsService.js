const boardPinsRepository = require('../Repositories/BoardPinsRepository');

const addPinToBoard = async (boardPin) => {
    return await boardPinsRepository.addPinToBoard(boardPin);
}

const removePinFromBoard = async (boardPin) => {
    return await boardPinsRepository.removePinFromBoard(boardPin);
}

module.exports = {
    addPinToBoard,
    removePinFromBoard
};