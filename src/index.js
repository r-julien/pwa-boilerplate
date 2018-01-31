import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./app/_utils";
import { App } from "./app/App/App";

import registerServiceWorker from "./registerServiceWorker";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);

registerServiceWorker();
