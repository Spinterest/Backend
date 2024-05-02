const databaseContext = require('../Data/databaseContext');

const likeSpin = async (spinLike) => {
    return await databaseContext.query(
        `insert into 
        SpinLikes (googleUserID, spinID) 
        values (${spinLike.googleUserID}, ${spinLike.spinID});`
    );
}

const removeLikeFromSpin = async (spinLike) => {
    return await databaseContext.query(
        `delete from SpinLikes  
        where 
            googleUserID = ${spinLike.googleUserID} and 
            spinID = ${spinLike.spinID};`
    );
}

module.exports = {
    likeSpin,
    removeLikeFromSpin
};