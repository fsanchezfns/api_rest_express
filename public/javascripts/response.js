function hlresponse(status, payload) {
    responseAux = new Object();


    responseAux.status = status;

    if (status == "OK") {
        responseAux.response = payload;
    } else {
        responseAux.response = payload; //manejo de errores

    }

    return (JSON.stringify(responseAux))

}


module.exports = hlresponse;