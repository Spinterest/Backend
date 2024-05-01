const pinTagsRepository = require('../Repositories/PinTagsRepository');

const addTagToPin = async (pinTag) => {
    return await pinTagsRepository.addTagToPin(pinTag);
}

const removeTagFromPin = async (pinTag) => {
    return await pinTagsRepository.removeTagFromPin(pinTag);
}

module.exports = {
    addTagToPin,
    removeTagFromPin
};