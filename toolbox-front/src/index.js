import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./App.scss";
import store from "./store/store.js";

// const el = document.getElementById("app");

// ReactDOM.(<App />, el);

ReactDOM.createRoot(document.getElementById("app")).render(
    <Provider store={store}>
      <App />
    </Provider>
);
