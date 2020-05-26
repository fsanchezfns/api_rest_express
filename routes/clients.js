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
router.get('/:idClient/contracts', async function(req, res, next) {
    clientId = req.params.idClient;
    result = await Client.getAllContract(clientId);

    resAux = hlresponse.response(result);
    res.status(resAux.status);
    res.end(resAux.payload);
});


router.get('/:idClient/contracts/:idContract', async function(req, res, next) {
    clientId = req.params.idClient;
    contId = req.params.idContract;
    result = await Client.getContract(clientId, contId);

    resAux = hlresponse.response(result);
    res.status(resAux.status);
    res.end(resAux.payload);
});

router.post('/:idClient/contracts', async function(req, res, next) {
    clientId = req.params.idClient;
    value = JSON.stringify(req.body);
    result = await Client.newContract(clientId, value);

    resAux = hlresponse.response(result);
    res.status(resAux.status);
    res.end(resAux.payload);
});

router.put('/:idClient/contracts/:idContract', async function(req, res, next) {
    clientId = req.params.idClient;
    contId = req.params.idContract;
    value = JSON.stringify(req.body);
    result = await Client.updateContract(clientId, contId, value);

    resAux = hlresponse.response(result);
    res.status(resAux.status);
    res.end(resAux.payload);
});

router.delete('/:idClient/contracts/:idContract', async function(req, res, next) {
    clientId = req.params.idClient;
    contId = req.params.idContract;
    value = JSON.stringify(req.body);
    result = await Client.deleteContract(clientId, contId);

    resAux = hlresponse.response(result);
    res.status(resAux.status);
    res.end(resAux.payload);
});


module.exports = router;