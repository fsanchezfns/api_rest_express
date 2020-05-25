dbRedis = require('../db/dbRedis')

async function newClient(value) {
    try {
        var result = new Object();
        id = await dbRedis.getLastId('clientId') + 1;
        key = `client#${id}`;
        await dbRedis.save(key, value);
        await dbRedis.setLastId('clientId', id);

        result.flag = 'S';
        result.data = `New ${key}`;
        return result;

    } catch {
        result.flag = 'N';
        result.error = 'En este momento no se puede realizar la operación';
        return result;
    }
};

async function getClient(id) {
    try {
        var result = new Object();
        key = `client#${id}`;

        data = await dbRedis.get(key)
        result.flag = 'S';
        result.data = data;
        return result;
    } catch {
        result.flag = 'N';
        result.error = `NO existe ${key}`;
        return result;
    }
};


async function updateClient(id, value) {
    try {
        var result = new Object();
        resultAux = await getClient(id)
            //compruebo existencia
        if (resultAux.flag == 'N') {
            return resultAux;
        } else {
            key = `client#${id}`;
            await dbRedis.save(key, value);

            result.flag = 'S';
            result.data = `update ${key}`;
            return result;
        }
    } catch {
        result.flag = 'N';
        result.error = 'En este momento no se puede actualizar';
        return result;
    }
}


async function deleteClient(id) {
    try {
        var result = new Object();
        resultAux = await getClient(id)
            //compruebo existencia
        if (resultAux.flag == 'N') {
            return resultAux;
        } else {
            key = `client#${id}`;
            await dbRedis.clear(key)
            result.flag = 'S';
            result.data = `delete ${key}`;
            return result;
        }
    } catch {
        result.flag = 'N';
        result.error = 'En este momento no se puede eliminar';
        return result;
    }
}


module.exports = { getClient, newClient, updateClient, deleteClient }