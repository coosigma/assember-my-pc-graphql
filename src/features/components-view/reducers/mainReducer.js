// import {
// 	REQUEST_CATEGORY,
// 	ADD_COMPONENT,
// 	REMOVE_COMPONENT,
// } from "../actions/index";
import { combineReducers } from "redux-immutable";
import State from "../../../containers/state";
import { merge, mergeDeep } from "immutable";
const Immutable = require("immutable");

const initialState = State.initial();

function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};
}

function requestCategory(allComponentsState, action) {
	return merge(allComponentsState, {
		isFetching: true,
		didInvalidate: false,
		currentCategory: action.name,
	});
}

function receiveCategory(allComponentsState, action) {
	const receivedComponents = Immutable.fromJS(action.json);
	return mergeDeep(allComponentsState, {
		isFetching: false,
		didInvalidate: false,
		data: receivedComponents,
	});
}

const allComponentsReducer = createReducer(initialState.get("all_components"), {
	REQUEST_CATEGORY: requestCategory,
	RECEIVE_CATEGORY: receiveCategory,
});

const myComponentsReducer = createReducer(
	initialState.get("my_components"),
	{}
);

const filterReducer = createReducer(initialState.get("filter"), {});

export default combineReducers({
	all_components: allComponentsReducer,
	my_components: myComponentsReducer,
	filter: filterReducer,
});
