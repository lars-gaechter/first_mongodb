const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var $ = require( "jquery" );
require('dotenv').config();

// middleware use on any and every route a body parser
app.use(bodyParser.json());


const postsRoute = require('./routes/posts');
// middleware use for posts
app.use('/posts', postsRoute);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('home');
});


mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    },
    () => {
        console.log("connected to db")
    }
);

// server start to listen
app.listen(3000);