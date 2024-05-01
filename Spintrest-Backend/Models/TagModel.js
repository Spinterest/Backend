const mapper = require('./ModelMapper');

const mapTag = (tag) => {
    return {
        tagID: tag.tagid !== undefined ? tag.tagid : tag.tagID,
        tagName: tag.tagname !== undefined ? tag.tagname : tag.tagName
    }
}

const Tag = (Tags) => {
    return mapper(Tags, mapTag);
}

module.exports = Tag;