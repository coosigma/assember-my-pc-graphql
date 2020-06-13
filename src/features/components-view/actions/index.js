export const REQUEST_CATEGORY = "REQUEST_CATEGORY";
export const ADD_COMPONENT = "ADD_COMPONENT";
export const REMOVE_COMPONENT = "REMOVE_COMPONENT";

export function requestCategory(name) {
	return { type: REQUEST_CATEGORY, name };
}

export function addComponent(id) {
	return { type: ADD_COMPONENT, id };
}

export function removeComponent(id) {
	return { type: REMOVE_COMPONENT, id };
}
