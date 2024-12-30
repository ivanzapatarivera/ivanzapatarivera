const express = require('express');
const router = express.Router();
const path = require('path');

// Router for index.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../assets/html/index.html'))
})


// Exporting router
module.exports = router;