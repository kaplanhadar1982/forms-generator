const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/config');
const headersMiddleware = require('./middlewares/headers');
const testRouters = require('./routes/test');
const formsRouters = require('./routes/form');
const userRouters  = require('./routes/user');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(headersMiddleware);
app.use(testRouters);
app.use(formsRouters);
app.use(userRouters);

app.get('/', (req, res) => {
   res.send('This is your server speeking!!!');
});

mongoose.connect('mongodb+srv://KaplanHadar:Rotem1983!@kaplancluster-pbwz9.mongodb.net/test?retryWrites=true')
    .then(()=>{
        app.listen(port);
    })
    .catch(err=>{
        console.log(err);
    });

