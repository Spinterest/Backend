const spinTagsRepository = require('../Repositories/SpinTagsRepository');

const addTagToSpin = async (spinTag) => {
    return await spinTagsRepository.addTagToSpin(spinTag);
}

const removeTagFromSpin = async (spinTag) => {
    return await spinTagsRepository.removeTagFromSpin(spinTag);
}

module.exports = {
    addTagToSpin,
    removeTagFromSpin
};