const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/config');
const testRouters = require('./routes/test');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use((req, res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST ,PUT ,DELETE ,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(testRouters);

app.get('/', (req, res) => {
   res.send('This is your server speeking!!!');
});

mongoose.connect('mongodb+srv://KaplanHadar:Rotem1983!@forms-generator-pbwz9.mongodb.net/test?retryWrites=true')
        .then(()=>{
            app.listen(port);
        })
        .catch(err=>{
            console.log(err);
        });

