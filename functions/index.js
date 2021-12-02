const functions = require("firebase-functions");

exports.sampleJson = functions.https.onRequest((request, response) => {
  const json = {"say": "hello world"};
  response.send(json);
});

exports.errorCode = functions.https.onRequest((request, response) => {
    response.status(500).send("Error")
});

exports.emptyData = functions.https.onRequest((request, response) => {
    response.send(null);
});