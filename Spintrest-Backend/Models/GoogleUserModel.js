const mapper = require("./ModelMapper");

const mapGoogleUser = (googleUser) => {
    return {
        googleUserID: googleUser.googleuserid !== undefined ? googleUser.googleuserid : googleUser.googleUserID,
        googleUserEmail: googleUser.googleuseremail !== undefined ? googleUser.googleuseremail : googleUser.googleUserEmail,
        googleUserName: googleUser.googleusername !== undefined ? googleUser.googleusername : googleUser.googleUserName,
        googleUserIsDeleted: googleUser.googleuserisdeleted !== undefined ? googleUser.googleuserisdeleted : googleUser.googleUserIsDeleted
    }
}

const GoogleUser = (googleUsers) => {
    return mapper(googleUsers, mapGoogleUser);
}

module.exports = GoogleUser;