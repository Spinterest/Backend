const mapper = require('./ModelMapper');

const mapSpinTags = (spinTags) => {
    return {
        spinTagID: spinTags.spintagid !== undefined ? spinTags.spintagid : spinTags.spinTagID,
        spinID: spinTags.spinid !== undefined ? spinTags.spinid : spinTags.spinID,
        tagID: spinTags.tagid !== undefined ? spinTags.tagid : spinTags.tagID
    }
}

const SpinTags = (SpinTags) => {
    return mapper(SpinTags, mapSpinTags);
}

module.exports = SpinTags;