const databaseContext = require('../Data/databaseContext');
const tagModel = require('../Models/TagModel');

const addTag = async (tagName) => {
    return await databaseContext.query(
        `insert into Tag (tagName) values ('${tagName}');`
    );
}

const filterTags = async (tagName) => {
    const result = await databaseContext.query(
        `select * from Tag where tagName like '%${tagName}%';`
    );

    return tagModel(result.rows);
}

module.exports = {
    addTag,
    filterTags
};