var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


//conection con redis
var redis = require('redis')
const host = "192.168.99.100" //url que corre mi docker
const port = 6379
    //Connecting redis client
const client = redis.createClient(port, host, redis)

client.on('connect', function() {
    console.log("Redis Connected")
});
client.on('error', function(err) {
    console.log(err)
});

client.set('string key', 'franquito se conecto vos podes', redis.print);
console.log(client.get('string key', redis.print))



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientsRouter = require('./routes/clients');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientsRouter);

module.exports = app;