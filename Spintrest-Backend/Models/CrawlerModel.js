const mapper = require("./ModelMapper");

const mapCrawler = (crawler) => {
    return {
        crawlerID: crawler.crawlerid !== undefined ? crawler.crawlerid : crawler.crawlerID,
        crawlerEmail: crawler.crawleremail !== undefined ? crawler.crawleremail : crawler.crawlerEmail,
        crawlerIsDeleted: crawler.crawlerisdeleted !== undefined ? crawler.crawlerisdeleted : crawler.crawlerIsDeleted
    }
}

const Crawler = (crawlers) => {
    return mapper(crawlers, mapCrawler);
}

module.exports = Crawler;