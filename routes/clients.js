var express = require('express');
var router = express.Router();
var Client = require('../model/Client');
var hlresponse = require('../helper/hlResponse');


router.get('/', async function(req, res, next) {
    result = await Client.getAllClient();

    resAux = hlresponse.response(result);
    res.status(resAux.status)
    res.end(resAux.payload);
});

router.get('/:idClient', async function(req, res, next) {
    clientId = req.params.idClient;
    result = await Client.getClient(clientId);

    resAux = hlresponse.response(result);
    res.status(resAux.status)
    res.end(resAux.payload);
});

router.post('/', async function(req, res, next) {
    value = JSON.stringify(req.body);
    result = await Client.newClient(value);

    resAux = hlresponse.response(result);
    res.status(resAux.status);
    res.end(resAux.payload);
});


router.put('/:idClient', async function(req, res, next) {
    clientId = req.params.idClient;
    value = JSON.stringify(req.body);
    result = await Client.updateClient(clientId, value);

    resAux = hlresponse.response(result);
    res.status(resAux.status);
    res.end(resAux.payload);
});

router.delete('/:idClient', async function(req, res, next) {
    clientId = req.params.idClient;
    result = await Client.deleteClient(clientId);

    resAux = hlresponse.response(result);
    res.status(resAux.status);
    res.end(resAux.payload);
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