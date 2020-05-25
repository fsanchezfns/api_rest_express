function response(result) {
    resAux = new Object();
    payload = new Object();

    if (result.flag == 'S') {
        payload.status = "OK";
        payload.response = result.data;

        resAux.status = 200; // code htpp
        resAux.payload = JSON.stringify(payload) //payload de la response

    } else {
        payload.status = "ERROR";
        payload.response = result.error;

        resAux.status = 400; //code http
        resAux.payload = JSON.stringify(payload) //payload de la response
    }

    return resAux;
}


module.exports = { response };