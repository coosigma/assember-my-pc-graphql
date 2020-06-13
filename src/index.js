import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Root from "./containers/Root";
import createSagaMiddleware from "redux-saga";
import State from "./container/state";
import configureStore from "./containers/configureStore";
import rootSaga from "./containers/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const state = State.initial();
const store = configureStore(state, sagaMiddleware);
sagaMiddleware.run(rootSaga);

render(<Root store={store} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
