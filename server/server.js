'use strict'
require('dotenv').config();
const express = require('express');
const joinPaths = require('path').join;
const history = require('connect-history-api-fallback');

const PORT = process.env.PORT;
let app = express();

app.use(history());
app.use(express.static(joinPaths(__dirname, '../dist')));
app.use('/style', express.static(joinPaths(__dirname, '../node_modules/materialize-css/dist')));

app.listen(PORT, () => {
  console.log('visualyze on port: ', PORT);
});
