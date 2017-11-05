import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {changeParams, search} from './actions';
import reducer from './reducer';
import axios from 'axios';
import App from './components/App';
import 'normalize.css';

axios.defaults.baseURL = 'https://api.stackexchange.com/2.2';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

function parse(hash) {
  return hash
    .substr(1)
    .split('=')
    .reduce((memo, item, index, arr) => {
      if (index % 2) {
        return memo;
      } else {
        memo[item] = arr[index + 1];
        return memo
      }
    }, {});
}

function onHashchange() {
  const params = parse(location.hash);
  if (params.search) search(params.search)(store.dispatch);
  changeParams(params)(store.dispatch);
}
onHashchange();
window.addEventListener('hashchange', onHashchange);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);
