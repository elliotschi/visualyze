'use strict'
require('dotenv').config();
const express = require('express');
const joinPaths = require('path').join;
const history = require('connect-history-api-fallback');
const pify = require('pify');
const request = pify(require('request'));
const utils = require('./config/utils');
const morgan = require('morgan');

const PORT = process.env.PORT;
let app = express();

app.use(morgan('dev'));

app.get('/api/github/:username', (req, res) => {
  if (req.params.username) {
    let githubUrl = `https://api.github.com/users/${req.params.username}`;
    
    request({
      url: githubUrl,
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      }
    })
      .then(result => {
        console.log('this is the data: ', result.body)
        res.send(JSON.parse(result.body));
      })
      .catch(err => {
        next(err);
      });
  }
});

app.use(history());
app.use(express.static(joinPaths(__dirname, '../dist')));
app.use('/style', express.static(joinPaths(__dirname, '../node_modules/materialize-css/dist')));

// error handling
app.use(utils.errorHandler);
app.use(utils.logError)

app.listen(PORT, () => {
  console.log('visualyze on port: ', PORT);
});
