const databaseContext = require('../Data/databaseContext');
const tagModel = require('../Models/TagModel');

const getTagByName = async (tagName) => {
    const result = await databaseContext.query(
        `select * from Tag where tagName = '${tagName}';`
    )

    return tagModel(result.rows);
}

const addTag = async (tagName) => {
    return await databaseContext.query(
        `insert into Tag (tagName) values ('${tagName}');`
    );
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