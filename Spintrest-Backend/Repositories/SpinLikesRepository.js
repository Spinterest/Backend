const databaseContext = require('../Data/databaseContext');

const likeSpin = async (spinLike) => {
    return await databaseContext.query(
        `insert into 
        SpinLikes (crawlerID, spinID) 
        values (${spinLike.crawlerID}, ${spinLike.spinID});`
    );
}

const removeLikeFromSpin = async (spinLike) => {
    return await databaseContext.query(
        `delete from SpinLikes  
        where 
            crawlerID = ${spinLike.crawlerID} and 
            spinID = ${spinLike.spinID};`
    );
}

module.exports = {
    likeSpin,
    removeLikeFromSpin
};