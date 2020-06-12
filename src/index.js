import React from "react";
import { render } from "react-dom";
import "./index.css";
import store from "./containers/store";
import * as serviceWorker from "./serviceWorker";
import Root from "./containers/Root";

render(<Root store={store} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
