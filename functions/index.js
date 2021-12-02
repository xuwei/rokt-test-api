const functionsGlobal = require("firebase-functions");
const functions = require("firebase-functions");

exports.sampleJson = functions.https.onRequest((request, response) => {
  const json = {"say": "hello world"};
  response.send(json);
});

exports.status500 = functions.https.onRequest((request, response) => {
  response.status(500).send("server error");
});

exports.throwHttpsError = functions.https.onRequest((request, response) => {
  throw new functionsGlobal.https.HttpsError("unauthenticated",
      "Request had invalid credentials.",
      {"some-key": "some-value"});
});

exports.throwError = functions.https.onRequest((request, response) => {
  throw Error("something went wrong");
});

exports.emptyData = functions.https.onRequest((request, response) => {
  response.send(null);
});

exports.timeout = functions.https.onRequest((request, response) => {
  // just never return
});
