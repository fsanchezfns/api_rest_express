# Api REST express
## Programación avanzada 2020
#


## 🚀 Init del proyecto 

* install dependencies:
     > npm install

* run the app:
     > SET DEBUG=api-rest-express:* & npm start


# 📄 ApiRest documentation

## Clients


* View clients

```
GET localhost:3000/clients
```
```
curl -X GET localhost:3000/clients
```

* View client 

```
GET localhost:3000/clients/:idClient
```
```
curl -X GET localhost:3000/clients/:idClient
```


* New client
```
POST localhost:3000/clients
```
```
curl -X POST -d"name:value" localhost:3000/clients
```

* Update client 
```
PUT localhost:3000/clients/:idClient
```
```
curl -X PUT -d"name:value" localhost:3000/clients/:idClient
```


* Delete 

```
DELETE localhost:3000/clients/:idClient
```

```
curl -X DELETE localhost:3000/clients/:idClient
```


## Contract

* View contracts

```
GET localhost:3000/clients/:idClient/contracts
```

```
curl -X GET localhost:3000/clients/:idClient/contracts
```

* View contract

```
GET localhost:3000/clients/:idClient/contracts/:idContract
```

```
curl -X GET localhost:3000/clients/:idClient/contracts/:idContract
```


* New contract

```
POST localhost:3000/clients/:idClient/contracts
```
```
curl -X POST -d"name:value" localhost:3000/clients/:idClient/contracts
```

* Update contract

```
PUT localhost:3000/clients/:idClient/contracts/:idContract
```

```
curl -X PUT -d"name:value" localhost:3000/clients/:idClient/contracts/:idContract
```

* Delete contract

```
DELETE localhost:3000/clients/:idClient/contracts/:idContract
```

```
curl -X DELETE localhost:3000/clients/:idClient/contracts/:idContract
```