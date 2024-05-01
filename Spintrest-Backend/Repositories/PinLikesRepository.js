const databaseContext = require('../Data/databaseContext');

const likePin = async (pinLike) => {
    return await databaseContext.query(
        `insert into 
        PinLikes (googleUserID, pinID) 
        values (${pinLike.googleUserID}, ${pinLike.pinID});`
    );
}

const removeLikeFromPin = async (pinLike) => {
    return await databaseContext.query(
        `delete from PinLikes  
        where 
            googleUserID = ${pinLike.googleUserID} and 
            pinID = ${pinLike.pinID};`
    );
}

module.exports = {
    likePin,
    removeLikeFromPin
};