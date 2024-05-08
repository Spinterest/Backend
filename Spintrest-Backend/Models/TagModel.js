const mapper = require('./ModelMapper');

const mapTag = (tag) => {
    return {
        tagID: tag.tagid !== undefined ? tag.tagid : tag.tagID,
        tagName: tag.tagname !== undefined ? tag.tagname : tag.tagName,
        frequency: tag.frequency !== undefined ? tag.frequency : tag.frequency
    }
}

const Tag = (Tags) => {
    return mapper(Tags, mapTag);
}

module.exports = Tag;