const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Manager API is running!');
});

//app.js setup - Irene

module.exports = app;