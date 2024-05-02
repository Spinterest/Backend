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

module.exports = {
    addSpinToWeb,
    removeSpinFromWeb
};