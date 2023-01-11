const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const passport = require("passport");
const logger = require("morgan");


//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Connect To Database
const connectDB = require("./config/db");
connectDB();

// Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging/ morgan
app.use(logger("dev"));




// ========================== Routes =================================
// const home = require('./routes/home')
const posts = require('./routes/posts')




//Routes
// app.use('/api/v1', home)
app.use('/api/v1/posts', posts)


//Server Running
app.listen(process.env.PORT, () => {
    console.log(`>> Server is running  on  localhost:${process.env.PORT}/api/v1, you better catch it!`);
  });