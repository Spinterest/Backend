const databaseContext = require('../Data/databaseContext');
const tagModel = require('../Models/TagModel');
const spinModel = require('../Models/SpinModel');

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

const addTagsToSpinByTagNames = async (spinLink, tagNames) => {
    let finalResults = [];
    for (let i = 0; i < tagNames.length; i++) {
        const tagName = tagNames[i];

        // Getting Tag
        let result = await databaseContext.query(`select * from Tag where tagName='${tagName}';`);
        const tag = tagModel(result.rows[0]);
        // Getting Spin
        result = await databaseContext.query(`select * from Spin where spinLink='${spinLink}';`);
        const spin = spinModel(result.rows[0]);

        finalResults.push(
            await addTagToSpin({
                spinID: spin.spinID,
                tagID: tag.tagID
            })
        );
    }

    return finalResults;
}

module.exports = {
    addTagToSpin,
    removeTagFromSpin,
    addTagsToSpinByTagNames
};