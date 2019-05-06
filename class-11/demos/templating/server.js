'use strict';

const express = require('express');

const app = express();

// Use this as a talking point about environment variables
const PORT = process.env.PORT || 3000;

// Set the view engine for templating


// Array of groceries for /list route
let list = ['apples', 'celery', 'butter', 'milk', 'eggs'];

// Array of quantities for /details route
let quantities = [
  { name: 'apples', quantity: 4 },
  { name: 'celery', quantity: 1 },
  { name: 'butter', quantity: 1 },
  { name: 'milk', quantity: 2 },
  { name: 'eggs', quantity: 12 }
]

// Routes
app.get('/', (request, response) => {

})

app.get('/list', (request, response) => {

})

app.get('/quantities', (request, response) => {

})


app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
