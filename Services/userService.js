const userRepository = require('../Repositories/userRepository');

async function getAllUsers() {
    return userRepository.getAllUsers();
}

module.exports = {
    getAllUsers
}