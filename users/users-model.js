const db = require('../database/dbConfig');

function getAll(){
    return db('users')
};

function add(user){
    return db('users')
    .insert(user)
};

function findBy(username){
    return db('users')
    .where(username)
    .first()
};

module.exports = {
    add,
    findBy,
    getAll
};