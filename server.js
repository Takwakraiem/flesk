const express = require("express");
const app = express();
const cors = require("cors");
const db_connect = require("./config/db_connect")
require("dotenv").config();
app.use(cors());

db_connect()

app.use(express.json({ limit: "10000mb" })); // Set the limit for JSON payloads


app.use("/annonce", require("./routes/annonceRoute"));




PORT = process.env.PORT;

//test our server
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log("server is running")
  );
  









