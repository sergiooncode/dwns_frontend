const express = require('express');
const os = require('os');

const app = express();

app.use('/', express.static('public'));
app.listen(5000, '0.0.0.0', () => console.log('Listening on port 5000!'));
