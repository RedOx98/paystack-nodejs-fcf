const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const express = require("express");
const paystack = require("paystack-api")("sk_test_28ef93a1b82a6b3cfeb11b9de1e5c6de177fb8dd");

const App = express();

// paystack.{resource}.{method}
paystack.customer
  .list()
  .then(function(body) {
    console.log(body);
  })
  .catch(function(error) {
    console.log(error);
  });
