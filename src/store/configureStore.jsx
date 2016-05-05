import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import ReduxPromise from 'redux-promise';

const configureStore = () => {
  const store = createStore(reducer, compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  )

  return store;
}

export default configureStore;