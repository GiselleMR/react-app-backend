const express = require('express');
const app = express();
const port = 3000;



//CRUD Routes RESTful

//GET all dogs
app.get('/dogs', (req, res) => {
    res.setEncoding('Hello World');
});

//POST create a dog
app.post('/dogs', (req, res) => {
    res.send('This is the POST route for dogs');
});

//GET one dog
app.get('/dogs/:id', (req, res) => {
    res.send('this is the GET route for one dog');
});

//PUT one dog
app.put('/dogs/:id', (req, res) => {
    res.send('This is the PUT route for one dog');
});

//DELETE one dong
app.delete('/dogs/:id', (req, res) => {
    res.send('This is the DELETE route for one dog');
});

app.listen(port, () => {
    console.log('You are connected to the port 3000');
});