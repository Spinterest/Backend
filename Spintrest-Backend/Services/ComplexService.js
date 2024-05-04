const queryWrapper = require('../SQLErrorHandler');
const complexRepository = require('../Repositories/ComplexRepository');

const getCrawlersWhoLikedComment = async (response, spinCommentID) => {
    return await queryWrapper(
        response,
        complexRepository.getCrawlersWhoLikedComment,
        spinCommentID
    );
}

const getCrawlersWhoLikedSpin = async (response, spinID) => {
    return await queryWrapper(
        response,
        complexRepository.getCrawlersWhoLikedSpin,
        spinID
    );
}

const getCommentsForSpin = async (response, spinID) => {
    return await queryWrapper(
        response,
        complexRepository.getCommentsForSpin,
        spinID
    );
}

const getSpinsForWeb = async (response, 
    webID,
    isLimited = false
) => {
    return await queryWrapper(
        response,
        complexRepository.getSpinsForWeb,
        webID,
        isLimited
    );
}

const getNumberOfSpinsInWeb = async (response, webID) => {
    return await queryWrapper(
        response,
        complexRepository.getNumberOfSpinsInWeb,
        webID
    );
}

const getWebsForCrawler = async (response, crawlerID) => {
    return await queryWrapper(
        response,
        complexRepository.getWebsForCrawler,
        crawlerID
    );
}

const getCrawlerFeed = async (response, 
    crawlerID,
    isLikedTags,
    offset,
    limit
) => {
    return await queryWrapper(
        response,
        complexRepository.getCrawlerFeed,
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