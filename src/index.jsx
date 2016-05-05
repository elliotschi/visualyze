import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import routes from './routes';


ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);