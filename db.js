//conection con redis
var redis = require('redis')
const host = "192.168.99.100" //url que corre mi docker
const port = 6379
    //Connecting redis client
const redisClient = redis.createClient(port, host, redis)

redisClient.on('connect', function() {
    console.log("Redis Connected")
});
redisClient.on('error', function(err) {
    console.log(err)
});

redisClient.set('string key', 'prueba', redis.print);
console.log(redisClient.get('string key', redis.print));

module.exports = redisClient;