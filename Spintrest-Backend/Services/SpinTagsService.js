const errorHandler = require('../SQLErrorHandler');
const spinTagsRepository = require('../Repositories/SpinTagsRepository');

const addTagToSpin = async (response, spinTag) => {
    if (
        errorHandler.jsonChecker(
            response,
            spinTag,
            ['tagID', 'spinID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinTagsRepository.addTagToSpin,
            spinTag
        );
    }
}

const removeTagFromSpin = async (response, spinTag) => {
    if (
        errorHandler.variableChecker(
            response,
            spinTag,
            ['tagID', 'spinID']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinTagsRepository.removeTagFromSpin,
            spinTag
        );
    }
}

const addTagsToSpinByTagNames = async (response, spinTags) => {
    if (
        errorHandler.jsonChecker(
            response,
            spinTags,
            ['spinLink', 'tagNames']
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            spinTagsRepository.addTagsToSpinByTagNames,
            spinTags.spinLink,
            spinTags.tagNames
        );
    }
}

module.exports = {
    addTagToSpin,
    removeTagFromSpin,
    addTagsToSpinByTagNames
};