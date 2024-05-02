const mapper = require('./ModelMapper');

const mapWebSpins = (webSpins) => {
    return {
        webSpinID: webSpins.webspinid !== undefined ? webSpins.webspinid : webSpins.webSpinID,
        webID: webSpins.webid !== undefined ? webSpins.webid : webSpins.webID,
        spinID: webSpins.spinid !== undefined ? webSpins.spinid : webSpins.spinID
    }
}

const SpinTags = (WebSpins) => {
    return mapper(WebSpins, mapWebSpins);
}

module.exports = SpinTags;