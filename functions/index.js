const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(`sk_test_51M44JjFi5uQhTMozN6N2lgS75BdG82FYM1zpFUX
la5HUpi4BSVTBGTrOM98d8X7dufBH8Gmzk9030Q3QDHmcGQ3k00zWeK5arL`)

// app confi
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
// app.get("/qazi", (req, res) => res.status(200).send("Whatsup Hamada"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    response.set("Access-Control-Allow-Origin": "*")
    console.log("payment reaquest recieved for this amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// listen command
exports.api = functions.https.onRequest(app);
