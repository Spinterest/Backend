const errorHandler = require('../SQLErrorHandler');
const tagRepository = require('../Repositories/TagRepository');

const getTagByName = async (response, tagName) => {
    if (
        errorHandler.variableChecker(
            response,
            tagName
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            tagRepository.getTagByName,
            tagName
        );
    }
}

const addTag = async (response, tag) => {
    if (
        errorHandler.jsonChecker(
            response,
            tag,
            ['tagName']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            tagRepository.addTag,
            tag.tagName
        );
    }
}

const filterTags = async (response, tagName) => {
    if (
        errorHandler.variableChecker(
            response,
            tagName
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            tagRepository.filterTags,
            tagName
        );
    }
}

module.exports = {
    addTag,
    filterTags,
    getTagByName
};