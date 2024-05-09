const databaseContext = require('../Data/databaseContext');
const tagModel = require('../Models/TagModel');

const getTagByName = async (tagName) => {
    const result = await databaseContext.query(
        `select * from Tag where tagName = '${tagName}';`
    )

    return tagModel(result.rows);
}

const addTag = async (tagNames) => {
    let tagValues = '';
    let valueText = '';
    if (tagNames.length > 0) {
        let tagsInDatabase = await databaseContext.query(
            `select tagName from Tag where 
                tagName in ('${tagNames.join("', '")}');`
        );
        tagsInDatabase = tagModel(tagsInDatabase.rows);
        if (tagsInDatabase) {
            if (Array.isArray(tagsInDatabase)) {
                tagsInDatabase = tagsInDatabase.map(tag => tag.tagName);
                tagNames = tagNames.filter(tagName => !tagsInDatabase.includes(tagName));
            }
            else {
                tagNames = tagNames.filter(tagName => tagName !== tagsInDatabase.tagName);
            }
        }

        if (tagNames.length > 0) {
            valueText = 'values\n';
            for (let i = 0; i < tagNames.length; i++) {
                tagValues = `${tagValues}\n('${tagNames[i]}'),`
            }
            tagValues = tagValues.slice(0, -1);

            return await databaseContext.query(
                `insert into 
                Tag (tagName) 
                ${valueText}${tagValues};`
            );
        }
    }
    return null;
}

const filterTags = async (tagName, existingTags) => {
    let whereClause = '';
    if (existingTags.length !== 0) {
        whereClause =
            `and
            tagName not in ('${existingTags.join("', '")}')`;
    }
    const result = await databaseContext.query(
        `select 
            * 
        from 
            Tag 
        where 
            tagName like '%${tagName}%' ${whereClause}
        limit 3;`
    );

    return tagModel(result.rows);
}

module.exports = {
    addTag,
    filterTags,
    getTagByName
};