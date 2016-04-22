'use strict'
require('dotenv').config();
const express = require('express');
const joinPaths = require('path').join;

const PORT = process.env.PORT;
let app = express();

app.use(express.static(joinPaths(__dirname, '../dist')));
console.log(joinPaths(__dirname, '../node_modules/materialize-css/dist'))
app.use('/style', express.static(joinPaths(__dirname, '../node_modules/materialize-css/dist')));

app.listen(PORT, () => {
  console.log('visualyze on port: ', PORT);
});
