import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers'

import App from './App';


const store = createStore(reducer, applyMiddleware(thunk, logger))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);