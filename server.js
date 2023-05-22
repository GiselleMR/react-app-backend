const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dogsRouter = require('./routes/dogs')

//environment
require('dotenv').config();

//database connection
require('./config/database');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ROUTES
app.use('/dogs', dogsRouter)

app.listen(port, () => {
    console.log('You are connected to the port 3000');
});