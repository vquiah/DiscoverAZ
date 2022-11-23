const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/db");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });


// Passport config
// require("./config/passport")(passport);

//Connect To Database
connectDB();


//Static Folder
// app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard dog",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING
    })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use('/', require('./routes/index'))
// app.use('/auth', require('./routes/auth'))
// app.use('/posts', require('./routes/posts'))


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!")
});