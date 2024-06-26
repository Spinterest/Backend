const errorHandler = require('../SQLErrorHandler');
const complexRepository = require('../Repositories/ComplexRepository');

const getCrawlersWhoLikedComment = async (response, spinCommentID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinCommentID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            complexRepository.getCrawlersWhoLikedComment,
            spinCommentID
        );

    }
}

const getCrawlersWhoLikedSpin = async (response, spinID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            complexRepository.getCrawlersWhoLikedSpin,
            spinID
        );
    }
}

const getCommentsForSpin = async (response, spinID) => {
    if (
        errorHandler.variableChecker(
            response,
            spinID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            complexRepository.getCommentsForSpin,
            spinID
        );
    }
}

const getSpinsForWeb = async (response, 
    webID,
    isLimited = false
) => {
    if (
        errorHandler.variableChecker(
            response,
            webID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            complexRepository.getSpinsForWeb,
            webID,
            isLimited
        );
    }
}

const getNumberOfSpinsInWeb = async (response, webID) => {
    if (
        errorHandler.variableChecker(
            response,
            webID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            complexRepository.getNumberOfSpinsInWeb,
            webID
        );
    }
}

const getWebsForCrawler = async (response, crawlerID) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            complexRepository.getWebsForCrawler,
            crawlerID
        );
    }
}

const getCrawlerFeed = async (response, 
    crawlerID,
    isLikedTags,
    offset,
    limit
) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID,
            isLikedTags
        )
    ){
        const result = await errorHandler.queryWrapper(
            response,
            complexRepository.getCrawlerFeed,
            crawlerID,
            isLikedTags,
            offset || 0,
            limit || 100
        );

        if (response.statusCode !== 500 && !result){
            return await errorHandler.queryWrapper(
                response,
                complexRepository.getUnloggedCrawlerFeed,
                offset || 0,
                limit || 100
            );
        }

        return result;
    }
};

const getUnloggedCrawlerFeed = async (
    response,
    offset,
    limit
) => {
    return await errorHandler.queryWrapper(
        response,
        complexRepository.getUnloggedCrawlerFeed,
        offset || 0,
        limit || 100
    );
};

const getTopTags = async (response, existingTags) => {
    if (errorHandler.jsonChecker(
        response,
        existingTags,
        ['existingTags']
    )){
        return await errorHandler.queryWrapper(
            response,
            complexRepository.getTopTags,
            existingTags.existingTags
        );
    }
};

const getCommentsLikedByCrawlerID = async (response, crawlerID) => {
    if (
        errorHandler.variableChecker(
            response,
            crawlerID
        )
    ){
        return await errorHandler.queryWrapper(
            response,
            complexRepository.getCommentsLikedByCrawlerID,
            crawlerID
        );
    }
}

module.exports = {
    getCrawlerFeed,
    getSpinsForWeb,
    getWebsForCrawler,
    getCommentsForSpin,
    getCrawlersWhoLikedSpin,
    getNumberOfSpinsInWeb,
    getCrawlersWhoLikedComment,
    getUnloggedCrawlerFeed,
    getCommentsLikedByCrawlerID,
    getTopTags
};