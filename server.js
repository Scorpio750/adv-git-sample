const express = require('express');

const app = express();
const PORT = process.env.NODE_ENV || 8080;

app.use(express.static('public/views'));
app.use(express.static('public'));
