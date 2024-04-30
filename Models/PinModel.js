const mapper = require('./ModelMapper');

const mapPin = (pin) => {
    return {
        pinID: pin.pinid,
        googleUserID: pin.googleuserid,
        pinIsDeleted: pin.pinisdeleted,
        pinTitle: pin.pintitle,
        pinDescription: pin.pindescription,
        pinTimestamp: pin.pintimestamp,
        pinLink: pin.pinlink
    }
}

const Pin = (pins) => {
    return mapper(pins, mapPin);
}

module.exports = Pin;