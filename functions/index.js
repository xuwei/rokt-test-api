const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.successExample = functions.https.onRequest((request, response) => {
  const json = {"say": "hello world"};
  response.send(json);
});
