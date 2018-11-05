const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/config');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.send('This is your server speeking!!!');
});

app.listen(port);