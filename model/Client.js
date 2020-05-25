dbRedis = require('../db/dbRedis')

async function getLastClientId() {
    return await dbRedis.getLastId('clientId')
};

async function saveClient(id, value) {
    key = `client#${id}`;
    result = await dbRedis.save(key, value);
    console.log(result)
    return await dbRedis.setLastId('clientId', id);

};

async function getClient(id) {
    key = `client#${id}`;
    return await dbRedis.get(key)
};



module.exports = { getLastClientId, saveClient, getClient }