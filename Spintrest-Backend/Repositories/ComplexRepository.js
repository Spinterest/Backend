const databaseContext = require('../Data/databaseContext');

const Spin = require('../Models/SpinModel');
const Web = require('../Models/WebModel');
const Crawler = require('../Models/CrawlerModel');
const SpinComment = require('../Models/SpinCommentModel');
const Tag = require('../Models/TagModel');

const getCrawlersWhoLikedComment = async (spinCommentID) => {
    const result = await databaseContext.query(
        `select
            c.crawlerID,
            c.crawlerEmail
        from
            CommentLikes as cl
            inner join SpinComment as sc on cl.spinCommentID = sc.spinCommentID
            inner join Crawler as c on cl.crawlerID = c.crawlerID
        where
            sc.spinCommentIsDeleted = false and
            cl.spinCommentID = ${spinCommentID};`
    );

    return  Crawler(result.rows);
};

const getCrawlersWhoLikedSpin = async (spinID) => {
    const result = await databaseContext.query(
        `select
            c.crawlerID,
            c.crawlerEmail
        from
            SpinLikes as sl
            inner join Spin as s on s.spinID = sl.spinID
            inner join Crawler as c on sl.crawlerID = c.crawlerID
        where
            s.spinIsDeleted = false and
            sl.spinID = ${spinID};`
    );

    return Crawler(result.rows);
};

const getCommentsForSpin = async (spinID) => {
    const result = await databaseContext.query(
        `select
            sc.spinCommentID,
            min(sc.crawlerID) as crawlerID,
            min(uc.crawlerUserName) as crawlerUserName,
            min(sc.spinID) as spinID,
            min(sc.spinCommentMessage) as spinCommentMessage,
            min(sc.spinCommentTimestamp) as spinCommentTimestamp,
            bool_and(sc.spinCommentIsDeleted) as spinCommentIsDeleted,
            coalesce(count(c.crawlerID), 0) as spinCommentLikeCount
        from
            SpinComment as sc
            inner join Spin as s on s.spinID = sc.spinID
            left join CommentLikes as cl on cl.spinCommentID = sc.spinCommentID
            left join Crawler as c on cl.crawlerID = c.crawlerID
            inner join Crawler as uc on uc.crawlerID = sc.crawlerID
        where
            sc.spinCommentIsDeleted = false and
            s.spinIsDeleted = false and
            sc.spinID = ${spinID}
        group by
            sc.spinCommentID;`
    );

    return SpinComment(result.rows);
};

const getSpinsForWeb = async (
    webID,
    isLimited
) => {
    const limitText = isLimited ? 'limit 4' : '';
    const result = await databaseContext.query(
        `select s.*
        from
            Spin as s
            inner join WebSpins as wp on s.spinID = wp.spinID
            inner join Web as w on w.webID = wp.webID
        where
            s.spinIsDeleted = false and
            w.webIsDeleted = false and
            w.webID = ${webID}
        ${limitText};`
    );

    return Spin(result.rows);
};

const getNumberOfSpinsInWeb = async (webID) => {
    const result = await databaseContext.query(
        `select count 
            (*) as count
        from
            Spin as s
            inner join WebSpins as wp on s.spinID = wp.spinID
            inner join Web as w on w.webID = wp.webID
        where
            s.spinIsDeleted = false and
            w.webIsDeleted = false and
            w.webID = ${webID};`
    );

    return result.rows[0];
};

const getWebsForCrawler = async (crawlerID) => {
    const result = await databaseContext.query(
        `select w.*
        from
            Web as w
            inner join Crawler as c on c.crawlerID = w.crawlerID
        where
            w.webIsDeleted = false and
            w.crawlerID = ${crawlerID};`
    );

    return Web(result.rows);
};

const getCrawlerFeed = async (
    crawlerID,
    isLikedTags,
    offset,
    limit
) => {
    const notString = isLikedTags ? '' : 'not'
    const result = await databaseContext.query(
        `select
            s.spinID,
            min(s.spinLink) as spinLink
        from
            Spin as s
            inner join SpinTags as st on s.spinID = st.spinID
            inner join Tag as t on t.tagID = st.tagID
        where
            s.spinIsDeleted = false and
            t.tagName ${notString} in (
                select * 
                from getCrawlerLikedTags(${crawlerID})
            )
        group by
            s.spinID
        limit ${limit}
        offset ${offset};`
    );

    return Spin(result.rows);
};

const getUnloggedCrawlerFeed = async (
    offset,
    limit
) => {
    const result = await databaseContext.query(
        `select
            s.spinID,
            min(s.spinLink) as spinLink
        from
            Spin as s
        where
            s.spinIsDeleted = false
        group by
            s.spinID
        limit ${limit}
        offset ${offset};`
    );

    return Spin(result.rows);
};

const getCommentsLikedByCrawlerID = async (crawlerID) => {
    const result = await databaseContext.query(
        `select 
            sc.* 
        from 
            Crawler as c
            inner join CommentLikes as cl on c.crawlerID = cl.crawlerID
            inner join SpinComment as sc on sc.spinCommentID = cl.spinCommentID
        where
            c.crawlerID = ${crawlerID};`
    );

    return SpinComment(result.rows);
};

const getTopTags = async () => {
    const result = await databaseContext.query(
        `select 
            t.tagID,
            min(t.tagName) as tagName,
            count(*) as frequency
        from
            Tag as t
            inner join SpinTags as st on t.tagID = st.tagID
        group by
            t.tagID
        order by
            frequency desc
        limit 3;`
    );

    return Tag(result.rows);
};

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