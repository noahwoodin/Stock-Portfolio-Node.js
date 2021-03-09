const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const landing_routes = require('./routes/landing')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', landing_routes);

console.log('here')

app.listen(3000)