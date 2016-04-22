import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Landing from './components/landing';
import Stats from './components/stats';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/:username" component={Stats} />
  </Route>
);