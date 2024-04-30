const mapper = require('./ModelMapper');

const mapPin = (pin) => {
    return {
        pinID: pin.pinid || pin.pinID,
        googleUserID: pin.googleuserid || pin.googleUserID,
        pinIsDeleted: pin.pinisdeleted || pin.pinIsDeleted,
        pinTitle: pin.pintitle || pin.pinTitle,
        pinDescription: pin.pindescription || pin.pinDescription,
        pinTimestamp: pin.pintimestamp || pin.pinTimestamp,
        pinLink: pin.pinlink || pin.pinLink
    }
}

const Pin = (pins) => {
    return mapper(pins, mapPin);
}

module.exports = Pin;