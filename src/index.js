const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

require('./database')
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(process.env.DB_PORT);
