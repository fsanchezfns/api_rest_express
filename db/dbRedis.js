var redisClient = require('./dbRedisConfig');

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

function set(key, value) {
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

function clear(key) {
    return new Promise((resolve, reject) => {
        redisClient.del(key, (err, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });

}



function getLastId(key) {
    //se agrega este get para evitar los errores y devolver 0 si no hay lastId
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, result) => {
            if (result) {
                resolve(result);
            } else {
                resolve(0);
            }
        });
    });

}


function getKey(key) {
    return new Promise((resolve, reject) => {
        console.log(key)
        redisClient.keys((key), (err, result) => {
            if (result) {
                //console.log(result)
                resolve(result);
            } else {
                reject(err);
            }
        });
    });

}



module.exports = {get, set, clear, getKey, getLastId }