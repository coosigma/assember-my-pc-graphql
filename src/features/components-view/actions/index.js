export const REQUEST_CATEGORY = "REQUEST_CATEGORY";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const ADD_COMPONENT = "ADD_COMPONENT";
export const REMOVE_COMPONENT = "REMOVE_COMPONENT";

export function requestCategory(name) {
	return { type: REQUEST_CATEGORY, name };
}

export function receiveCategory(json) {
	return { type: RECEIVE_CATEGORY, json };
}

export function addComponent(id) {
	return { type: ADD_COMPONENT, id };
}

export function removeComponent(id) {
	return { type: REMOVE_COMPONENT, id };
}
