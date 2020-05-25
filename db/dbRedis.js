var redisClient = require('./dbRedisConfig');

function save(key, value) {
    return new Promise((resolve, reject) => {
        redisClient.set(key, value, (err, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(err);
            }

        });
    });
}


function get(key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, result) => {

            if (result) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });

}


function getLastId(key) {
    return new Promise((resolve, reject) => {

        redisClient.get(key, (err, result) => {
            if (result) {
                resolve(parseInt(result));

            } else {
                resolve(0);
            }
        });
    })
}


function setLastId(key, id) {
    return new Promise((resolve, reject) => {
        redisClient.set(key, id, (err, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = { save, get, getLastId, setLastId }