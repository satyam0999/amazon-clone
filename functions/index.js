const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NuYszSEErlnHKgmzNLX5DxRE3bAFy3W3dv3VFk1FEQdSYvLFtc3R3TY6c6xpJZogqMkfBNTbcSM0XB3bOzCMxfK00Qgcqz33o"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world, how are you"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
//http://127.0.0.1:5001/clone-94e51/us-central1/api
//http://127.0.0.1:5001/clone-94e51/us-central1/api