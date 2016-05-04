import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import ReduxPromise from 'redux-promise';

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(ReduxPromise));

  return store;
}

export default configureStore;