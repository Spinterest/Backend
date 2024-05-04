const databaseContext = require('../Data/databaseContext');

const addTagToSpin = async (spinTag) => {
    return await databaseContext.query(
        `insert into 
        SpinTags (spinID, tagID) 
        values (${spinTag.spinID}, ${spinTag.tagID});`
    );
}

const removeTagFromSpin = async (spinTag) => {
    return await databaseContext.query(
        `delete from SpinTags  
        where 
            spinID = ${spinTag.spinID} and 
            tagID = ${spinTag.tagID};`
    );
}

module.exports = {
    addTagToSpin,
    removeTagFromSpin
};