const tagRepository = require('../Repositories/TagRepository');

const getTagByName = async (tagName) => {
    return await tagRepository.getTagByName(tagName);
}

const addTag = async (tagName) => {
    return await tagRepository.addTag(tagName);
}

const filterTags = async (tagName) => {
    return await tagRepository.filterTags(tagName);
}

module.exports = {
    addTag,
    filterTags,
    getTagByName
};