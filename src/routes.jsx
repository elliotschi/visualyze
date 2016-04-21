import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import NavBar from './components/NavBar';

const hello = () => {
  return <div>hello</div>;
} 

export default (
  <Route path="/" component={App}>
    <IndexRoute component={hello} />
  </Route>
);