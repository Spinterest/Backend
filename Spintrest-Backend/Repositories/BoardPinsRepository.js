const databaseContext = require('../Data/databaseContext');

const addPinToBoard = async (boardPin) => {
    return await databaseContext.query(
        `insert into 
        BoardPins (boardID, pinID) 
        values (${boardPin.boardID}, ${boardPin.pinID});`
    );
}

const removePinFromBoard = async (boardPin) => {
    return  await databaseContext.query(
        `delete from BoardPins  
        where 
            boardID = ${boardPin.boardID} and 
            pinID = ${boardPin.pinID};`
    );
}

module.exports = {
    addPinToBoard,
    removePinFromBoard
};