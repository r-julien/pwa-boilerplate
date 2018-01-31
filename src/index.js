import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from "./app/App/App";
import rootReducer from './app/_reducers';
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);

registerServiceWorker();
