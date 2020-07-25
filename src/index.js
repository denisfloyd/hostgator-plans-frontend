import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

//import reducers from './stores/reducers';
import plans from './stores/plans/reducer';

function configure(preloadedState) {
  return createStore(plans,
    preloadedState, applyMiddleware(thunk));
}

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
