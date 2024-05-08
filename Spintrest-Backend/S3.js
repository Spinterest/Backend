require('dotenv').config();
const aws = require('aws-sdk')
const util = require('util');
const crypto = require('crypto');
const databaseContext = require('./Data/databaseContext.js');
const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

async function generateSpinLink() {
    var randomBytes = util.promisify(crypto.randomBytes)
    var rawBytes = await randomBytes(16);
    var imageName = rawBytes.toString('hex');

    var links = await databaseContext.query(
        `select
            spinlink
        from
            Spin
        where spinlink LIKE '${'%'+imageName+'%'}';`
    );

    while (links.rowCount != 0) {
        randomBytes = util.promisify(crypto.randomBytes)
        rawBytes = await randomBytes(16);
        imageName = rawBytes.toString('hex');

        links = await databaseContext.query(
            `select
                spinlink
            from
                Spin
            where spinlink LIKE '${"%"+imageName+"%"};'`
        );
    }

    const params = ({Bucket: bucketName, Key: imageName, Expires: 60});

    const uploadURL = await s3.getSignedUrlPromise('putObject', params);
    return uploadURL;
}

module.exports = generateSpinLink;