var express = require('express');
var router = express.Router();
var Client = require('../model/Client')
var hlresponse = require('../public/javascripts/response');

const statusOK = 'OK';
const statusError = 'ERROR';

router.get('/', function(req, res, next) {
    status = 'OK'
    payload = '[{clients1},{client2}]'
    res.end(hlresponse(status, payload));
});

router.get('/:idClient', async function(req, res, next) {
    try {
        clientId = req.params.idClient
        result = await Client.getClient(clientId)
        res.status(200)
        res.end(hlresponse(statusOK, result));
        console.log(result)
    } catch (e) {
        console.log(e);
        res.status(400)
        err = 'no existe el cliente'
        res.end(hlresponse(statusError, err));
    }
});

router.post('/', async function(req, res, next) {
    try {
        clientId = await Client.getLastClientId() + 1;
        value = JSON.stringify(req.body);
        console.log(value)
        await Client.saveClient(clientId, value)

        msg = `client#${clientId} creado`;
        res.status(200);
        res.end(hlresponse(statusOK, msg));
    } catch {
        res.status(400);
        err = 'no existe el cliente';
        res.end(hlresponse(statusError, err));
    }
});


router.put('/:idClient', function(req, res, next) {
    body = JSON.stringify(req.body);
    res.end('update de client: ' + req.params.idClient + ' body: ' + body);
});

router.delete('/:idClient', function(req, res, next) {
    idClient = req.params.idClient;
    key = `client#${idClient}`;

    redisClient.del(key, (err, result) => {
        if (result) {
            res.status(200);
            res.end(hlresponse(statusOK, `delete user ${idClient}`))

        } else {
            res.status(400);
            res.end(hlresponse(statusError, err));
        }
    });

});


//contracts
router.get('/:idClient/contracts', function(req, res, next) {
    res.end('view de contracts del client: ' + req.params.idClient);
});

router.get('/:idClient/contracts/:idContract', function(req, res, next) {
    res.end('view del contract ' + req.params.idContract + ' del client: ' + req.params.idClient);
});

router.post('/:idClient/contracts', function(req, res, next) {
    body = JSON.stringify(req.body);
    res.end('new de contracts del client: ' + req.params.idClient + ' body: ' + body);
});

router.put('/:idClient/contracts/:idContract', function(req, res, next) {
    body = JSON.stringify(req.body);
    res.end('update del contract ' + req.params.idContract + ' del client: ' + req.params.idClient + ' body: ' + body);
});

router.delete('/:idClient/contracts/:idContract', function(req, res, next) {
    res.end('delete del contract ' + req.params.idContract + ' del client: ' + req.params.idClient);
});


module.exports = router;