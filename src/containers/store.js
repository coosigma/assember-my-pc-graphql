import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export default function configureStore(initialState, sagaMiddleware) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	);
}
