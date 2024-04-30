const mapper = require("./ModelMapper");

const mapGoogleUser = (googleUser) => {
    return {
        googleUserID: googleUser.googleuserid || googleUser.googleUserID,
        googleUserEmail: googleUser.googleuseremail || googleUser.googleUserEmail,
        googleUserIsDeleted: googleUser.googleuserisdeleted || googleUser.googleUserIsDeleted
    }
}

const GoogleUser = (googleUsers) => {
    return mapper(googleUsers, mapGoogleUser);
}

module.exports = GoogleUser;