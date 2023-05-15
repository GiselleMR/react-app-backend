const express = require('express');
const app = express();
const port = 3000;



//Routes
app.get('/', (res, req) => {
    res.setEncoding('Hello World');
})

app.listen(port, () => {
    console.log('You are connected to the port 3000');
})