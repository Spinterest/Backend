const mapper = require('./ModelMapper');

const mapSpin = (spin) => {
    return {
        spinID: spin.spinid !== undefined ? spin.spinid : spin.spinID,
        crawlerID: spin.crawlerid !== undefined ? spin.crawlerid : spin.crawlerID,
        spinIsDeleted: spin.spinisdeleted !== undefined ? spin.spinisdeleted : spin.spinIsDeleted,
        spinTitle: spin.spintitle !== undefined ? spin.spintitle : spin.spinTitle,
        spinDescription: spin.spindescription !== undefined ? spin.spindescription : spin.spinDescription,
        spinTimestamp: spin.spintimestamp !== undefined ? spin.spintimestamp : spin.spinTimestamp,
        spinLink: spin.spinlink !== undefined ? spin.spinlink : spin.spinLink
    }
}

const Spin = (spins) => {
    return mapper(spins, mapSpin);
}

module.exports = Spin;