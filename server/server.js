const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const passport = require("passport");
const logger = require("morgan");

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

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

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// ========================== Routes =================================

const authRouter = require('./routes/auth');
const posts = require('./routes/posts')
const comments = require('./routes/comments')

//Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/posts', posts)
app.use('/api/v1/comment', comments)



//Server Running
app.listen(process.env.PORT, () => {
    console.log(`>> Server is running  on  localhost:${process.env.PORT}/api/v1, you better catch it!`);
  });