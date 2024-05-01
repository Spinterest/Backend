const mapper = require('./ModelMapper');

const mapPinTags = (pinTags) => {
    return {
        pinTagID: pinTags.pintagid !== undefined ? pinTags.pintagid : pinTags.pinTagID,
        pinID: pinTags.pinid !== undefined ? pinTags.pinid : pinTags.pinID,
        tagID: pinTags.tagid !== undefined ? pinTags.tagid : pinTags.tagID
    }
}

const PinTags = (PinTags) => {
    return mapper(PinTags, mapPinTags);
}

module.exports = PinTags;