const mapper = require("./ModelMapper");

const mapGoogleUser = (googleUser) => {
    return {
        googleUserID: googleUser.googleuserid,
        googleUserEmail: googleUser.googleuseremail,
        googleUserIsDeleted: googleUser.googleuserisdeleted
    }
}

const GoogleUser = (googleUsers) => {
    return mapper(googleUsers, mapGoogleUser);
}

module.exports = GoogleUser;