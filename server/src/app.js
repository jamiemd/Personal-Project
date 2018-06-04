const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const session = require("express-session");
const bcrypt = require("bcrypt");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

routes(app);

app.listen(5000);

const jwt = require("jwt-simple");

const passport = require("passport");
app.use(passport.initialize());
require("./config/passport")(passport);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

mongoose.Promise = global.Promise;
const connect = mongoose.connect("mongodb://localhost/flashcards");

connect.then(
  () => {
    const port = 8000;
    app.listen(port);
    console.log(`app Listening on ${port}`);
  },
  err => {
    console.log("could not connect to MongoDB");
  }
);
