var redis = require('redis')
var redisClient = require('../../db');

function getLastClientId() {
    return new Promise((resolve, reject) => {

        redisClient.get('clientId', (err, result) => {
            if (result) {
                resolve(parseInt(result));

            } else {
                resolve(0);
            }
        });
    })
}

//guarda el clientId
function setClientId(clientId) {
    redisClient.set('clientId', clientId, (err, result) => {
        if (result) {
            return true;
        } else {
            return false;
        }
    });
}

module.exports = { getLastClientId, setClientId }