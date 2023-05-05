
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import padelReducers from "./reducers/padelReducers";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  padelReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);