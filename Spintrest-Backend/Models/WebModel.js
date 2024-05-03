const mapper = require('./ModelMapper');

const mapWeb = (web) => {
    return {
        webID: web.webid !== undefined ? web.webid : web.webID,
        crawlerID: web.crawlerid !== undefined ? web.crawlerid : web.crawlerID,
        webDescription: web.webdescription !== undefined ? web.webdescription : web.webDescription,
        webIsDeleted: web.webisdeleted !== undefined ? web.webisdeleted : web.webIsDeleted,
        webTitle: web.webtitle !== undefined ? web.webtitle : web.webTitle
    }
}

const Web = (webs) => {
    return mapper(webs, mapWeb);
}

module.exports = Web;