const complexRepository = require('../Repositories/ComplexRepository');

const getCrawlersWhoLikedComment = async (spinCommentID) => {
    return await complexRepository.getCrawlersWhoLikedComment(spinCommentID);
}

const getCrawlersWhoLikedSpin = async (spinID) => {
    return await complexRepository.getCrawlersWhoLikedSpin(spinID);
}

const getCommentsForSpin = async (spinID) => {
    return await complexRepository.getCommentsForSpin(spinID);
}

const getSpinsForWeb = async (
    webID,
    isLimited = false
) => {
    return await complexRepository.getSpinsForWeb(webID, isLimited);
}

const getNumberOfSpinsInWeb = async (webID) => {
    return await complexRepository.getNumberOfSpinsInWeb(webID);
}

const getWebsForCrawler = async (crawlerID) => {
    return await complexRepository.getWebsForCrawler(crawlerID);
}

const getCrawlerFeed = async (
    crawlerID,
    isLikedTags,
    offset,
    limit
) => {
    return await complexRepository.getCrawlerFeed(
        crawlerID,
        isLikedTags,
        offset || 0,
        limit || 100
    );
};

module.exports = {
    getCrawlerFeed,
    getSpinsForWeb,
    getWebsForCrawler,
    getCommentsForSpin,
    getCrawlersWhoLikedSpin,
    getNumberOfSpinsInWeb,
    getCrawlersWhoLikedComment
};