import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import axios from 'axios';
import App from './components/App';
import 'normalize.css';

// import {search} from './actions'; // todo remove

axios.defaults.baseURL = 'https://api.stackexchange.com/2.2';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

// store.dispatch(search('react'));  // todo remove

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);
