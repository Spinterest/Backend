const mapper = require('./ModelMapper');

const mapWebCard = (webCard) => {
    return {
        webID: webCard.webid !== undefined ? webCard.webid : webCard.webID,
        webTitle: webCard.webtitle !== undefined ? webCard.webtitle : webCard.webTitle,
        webDescription: webCard.webdescription !== undefined ? webCard.webdescription : webCard.webDescription,
        spinLink: webCard.spinlink !== undefined ? webCard.spinlink : webCard.spinLink
    }
}

const WebCard = (webCards) => {
    return mapper(webCards, mapWebCard);
}

module.exports = WebCard;