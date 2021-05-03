import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/App/App";

import "./index.css";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers/root";
import { Provider } from "react-redux";

const ReactReduxDevTools =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
        : null;

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), ReactReduxDevTools)
);

const secret = "4cbcea96de";
const key = "evsev96";

const finalKey = `${key}:${secret}`;

console.log(window.btoa(finalKey));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
