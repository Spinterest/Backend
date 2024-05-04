const queryWrapper = require('../SQLErrorHandler');
const spinTagsRepository = require('../Repositories/SpinTagsRepository');

const addTagToSpin = async (response, spinTag) => {
    return await queryWrapper(
        response,
        spinTagsRepository.addTagToSpin,
        spinTag
    );
}

const removeTagFromSpin = async (response, spinTag) => {
    return await queryWrapper(
        response,
        spinTagsRepository.removeTagFromSpin,
        spinTag
    );
}

module.exports = {
    addTagToSpin,
    removeTagFromSpin
};