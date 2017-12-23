import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { Provider } from "react-redux";
import reducers from "./Reducers";
import "./index.css";
import App from "./App";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
