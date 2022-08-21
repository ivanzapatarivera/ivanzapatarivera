const express = require('express');
const app = express();
const path = require('path');

const nodemon = require('nodemon');

app.use(express.static('./assets'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(require('./routes/html-routes'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});

console.log('Hello World')