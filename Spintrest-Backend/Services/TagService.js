const queryWrapper = require('../SQLErrorHandler');
const tagRepository = require('../Repositories/TagRepository');

const getTagByName = async (response, tagName) => {
    return await queryWrapper(
        response,
        tagRepository.getTagByName,
        tagName
    );
}

const addTag = async (response, tagName) => {
    return await queryWrapper(
        response,
        tagRepository.addTag,
        tagName
    );
}

const filterTags = async (response, tagName) => {
    return await queryWrapper(
        response,
        tagRepository.filterTags,
        tagName
    );
}

module.exports = {
    addTag,
    filterTags,
    getTagByName
};