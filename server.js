const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

const parties = require("./routes/api/parties");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use("/api/parties", parties);
app.use(routes);

//DB Config
const db = process.env.DB_URI;

// Connect to the Mongo DB
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  mongoose.set("useFindAndModify", false);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});