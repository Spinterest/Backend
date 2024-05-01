const databaseContext = require('../Data/databaseContext');

const addTagToPin = async (pinTag) => {
    return await databaseContext.query(
        `insert into 
        PinTags (pinID, tagID) 
        values (${pinTag.pinID}, ${pinTag.tagID});`
    );
}

const removeTagFromPin = async (pinTag) => {
    return await databaseContext.query(
        `delete from PinTags  
        where 
            pinID = ${pinTag.pinID} and 
            tagID = ${pinTag.tagID};`
    );
}

module.exports = {
    addTagToPin,
    removeTagFromPin
};