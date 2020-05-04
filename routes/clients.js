var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.end('index de clients');
});

router.get('/:idClient', function(req, res, next) {
    res.end('view de client: ' + req.params.idClient);
});

router.post('/', function(req, res, next) {
    body = JSON.stringify(req.body);
    res.end('new client body: ' + body);
});


router.put('/:idClient', function(req, res, next) {
    body = JSON.stringify(req.body);
    res.end('update de client: ' + req.params.idClient + ' body: ' + body);

});

router.delete('/:idClient', function(req, res, next) {
    res.end('delete de client: ' + req.params.idClient);

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