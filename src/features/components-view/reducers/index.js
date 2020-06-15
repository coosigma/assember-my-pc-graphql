// import {
// 	REQUEST_CATEGORY,
// 	ADD_COMPONENT,
// 	REMOVE_COMPONENT,
// } from "../actions/index";
import State from "../../../containers/state";
import { receiveCategory } from "../actions";
import Immutable from require('immutable');
const { merge } = require("immutable");

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
	return merge(allComponentsState, { isFetching: true, didInvalidate: false });
}

function receiveCategory(allComponentsState, action) {
	const receivedComponents = Immutable.fromJS(action.json.components);
	return merge(allComponentsState, {
		isFetching: false,
		didInvalidate: false,
		data: receivedComponents,
	});
}

const allComponentsReducer = createReducer(initialState.get("all_components"), {
	REQUEST_CATEGORY: requestCategory,
	RECEIVE_CATEGORY: receiveCategory,
});

export default componentsViewReducer = combineReducers({
	all_components: allComponentsReducer,
});
