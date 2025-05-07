// Application backend runs using Express.js
// The front-end runs using React 
const express = require('express');
const app = express();

const path = require('path');

// Nodemon is required to faciliate application development
// Remove for production environment
const nodemon = require('nodemon');

// Asking app to use the folder assets where JS, HTML and docs reside.
app.use(express.static('./assets'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Routes will be stored in the foler routes.
app.use(require('./routes/html-routes'))

// nitializing application on PORT 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})