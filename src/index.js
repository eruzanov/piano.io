import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import queryString from 'query-string';
import {changeParams, search, questionsByUser,questionsByTag} from './actions';
import reducer from './reducer';
import axios from 'axios';
import Pager from './components/Pager';
import 'normalize.css';

axios.defaults.baseURL = 'https://api.stackexchange.com/2.2';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

function onHashchange() {
  const params = queryString.parse(location.hash);
  if (params.search) search(params.search)(store.dispatch);
  if (params.user) questionsByUser(params.user)(store.dispatch);
  if (params.tag) questionsByTag(params.tag)(store.dispatch);
  changeParams(params)(store.dispatch);
}
onHashchange();
window.addEventListener('hashchange', onHashchange);

render(
  <Provider store={store}>
    <Pager/>
  </Provider>,
  document.querySelector('#app')
);
