const databaseContext = require('../Data/databaseContext');

const addSpinToWeb = async (webSpin) => {
    return await databaseContext.query(
        `insert into 
        WebSpins (webID, spinID) 
        values (${webSpin.webID}, ${webSpin.spinID});`
    );
}

const removeSpinFromWeb = async (webSpin) => {
    return  await databaseContext.query(
        `delete from WebSpins  
        where 
            webID = ${webSpin.webID} and 
            spinID = ${webSpin.spinID};`
    );
}

const isWebSpinPairUnique = async (webSpin) => {
    const result = await databaseContext.query(
        `select
            case
                when count(*) = 0 then 'true'
                else 'false'
            end as result
        from
            WebSpins
        where
            webID = ${webSpin.webID} and
            spinID = ${webSpin.spinID};`
    );

    return result.rows[0];
}

module.exports = {
    addSpinToWeb,
    removeSpinFromWeb,
    isWebSpinPairUnique
};