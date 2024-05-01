const databaseContext = require('../Data/databaseContext');
const googleUserModel = require('../Models/GoogleUserModel');

const getUserWithID = async (
    googleUserID,
    googleUserIsDeleted = false
) => {
    const result = await databaseContext.query(
        `select * 
        from GoogleUser 
        where 
            googleUserID = ${googleUserID} and
            googleUserIsDeleted = ${googleUserIsDeleted};`
    );
    return googleUserModel(result.rows);
};

const getUserWithEmail = async (
    googleUserEmail,
    googleUserIsDeleted = false
) => {
    const result = await databaseContext.query(
        `select *
         from GoogleUser 
         where 
            googleUserEmail = '${googleUserEmail}' and
            googleUserIsDeleted = ${googleUserIsDeleted};`
    );
    return googleUserModel(result.rows);
};

const addUserWithEmail = async (googleUserEmail) => {
    const result = await databaseContext.query(
        `insert into 
        GoogleUser (googleUserEmail) 
        values ('${googleUserEmail}');`
    );
    return result;
}

const deleteUserWithID = async (googleUserID) => {
    const result = await databaseContext.query(
        `update GoogleUser
        set googleUserIsDeleted = true
        where googleUserID = ${googleUserID};`
    );
    return result;
}

const deleteUserWithEmail = async (googleUserEmail) => {
    const result = await databaseContext.query(
        `update GoogleUser
        set googleUserIsDeleted = true
        where googleUserEmail = '${googleUserEmail}';`
    );
    return result;
}

const restoreUserWithID = async (googleUserID) => {
    const result = await databaseContext.query(
        `update GoogleUser
        set googleUserIsDeleted = false
        where googleUserID = ${googleUserID};`
    );
    return result;
}

const restoreUserWithEmail = async (googleUserEmail) => {
    const result = await databaseContext.query(
        `update GoogleUser
        set googleUserIsDeleted = false
        where googleUserEmail = '${googleUserEmail}';`
    );
    return result.rowCount;
}

module.exports = {
    getUserWithID, 
    getUserWithEmail,
    addUserWithEmail,
    deleteUserWithID,
    deleteUserWithEmail,
    restoreUserWithEmail,
    restoreUserWithID
};