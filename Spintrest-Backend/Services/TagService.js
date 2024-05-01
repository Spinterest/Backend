const tagRepository = require('../Repositories/TagRepository');

const addTag = async (tagName) => {
    return await tagRepository.addTag(tagName);
}

const filterTags = async (tagName) => {
    return await tagRepository.filterTags(tagName);
}

module.exports = {
    addTag,
    filterTags
};