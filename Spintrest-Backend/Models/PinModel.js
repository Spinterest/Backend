const mapper = require('./ModelMapper');

const mapPin = (pin) => {
    return {
        pinID: pin.pinid !== undefined ? pin.pinid : pin.pinID,
        googleUserID: pin.googleuserid !== undefined ? pin.googleuserid : pin.googleUserID,
        pinIsDeleted: pin.pinisdeleted !== undefined ? pin.pinisdeleted : pin.pinIsDeleted,
        pinTitle: pin.pintitle !== undefined ? pin.pintitle : pin.pinTitle,
        pinDescription: pin.pindescription !== undefined ? pin.pindescription : pin.pinDescription,
        pinTimestamp: pin.pintimestamp !== undefined ? pin.pintimestamp : pin.pinTimestamp,
        pinLink: pin.pinlink !== undefined ? pin.pinlink : pin.pinLink
    }
}

const Pin = (pins) => {
    return mapper(pins, mapPin);
}

module.exports = Pin;