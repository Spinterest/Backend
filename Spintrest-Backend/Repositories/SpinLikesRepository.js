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

const isSpinLikePairUnique = async (spinLike) => {
    const result = await databaseContext.query(
        `select
            case
                when count(*) = 0 then 'true'
                else 'false'
            end as result
        from
            SpinLikes
        where
            crawlerID = ${spinLike.crawlerID} and 
            spinID = ${spinLike.spinID};`
    );

    return result.rows[0];
}

module.exports = {
    likeSpin,
    removeLikeFromSpin,
    isSpinLikePairUnique
};