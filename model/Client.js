dbRedis = require('../db/dbRedis')


async function getAllClient() {
    var result = new Object();
    try {
        keys = await dbRedis.getKey("client#[1-9]*")
        dataList = new Array();

        for (var item in keys) {
            data = await dbRedis.get(keys[item]);
            dataList.push(data);
        }

        result.flag = 'S';
        result.data = dataList;
        return result;
    } catch {
        result.flag = 'N';
        result.error = 'En este momento no se puede realizar la request';
        return result;
    }
}


async function newClient(value) {
    try {
        var result = new Object();
        idAux = await dbRedis.getLastId('clientId');
        id = parseInt(idAux) + 1;
        key = `client#${id}`;
        await dbRedis.set(key, value);
        await dbRedis.set('clientId', id);

        result.flag = 'S';
        result.data = `New ${key}`;
        return result;

    } catch {
        result.flag = 'N';
        result.error = 'En este momento no se puede realizar la creacion';
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
            await dbRedis.set(key, value);

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


module.exports = { getAllClient, getClient, newClient, updateClient, deleteClient }