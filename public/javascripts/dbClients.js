var redis = require('redis')
var redisClient = require('../../db');

function getLastClientId() {
    clientId = 1;
    //consulta a redis que no anda
    redisClient.get('clientId', (err, result) => {
        if (result) {
            clientIdAux = parseInt(result);
            return clientIdAux;
        } else {
            clientIdAux = 0
            return clientIdAux;
        }

    });

    return clientId;
};

//guarda el clientId
function setClientId(clientId) {
    aux = 1
    redisClient.set('clientId', aux, (err, result) => {
        if (result) {
            return true;
        } else {
            return false;
        }
    });
}

module.exports = { getLastClientId, setClientId }