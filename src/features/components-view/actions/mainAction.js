export const domain = "http://192.168.178.22:8000";

export function requestCategory(category) {
	const uri = domain + "/api/components/" + category;
	return { type: "REQUEST_CATEGORY", category, uri };
}

export function receiveCategory(json) {
	return { type: "RECEIVE_CATEGORY", json };
}

export function addComponent(id) {
	return { type: "ADD_COMPONENT", id };
}

export function removeComponent(id) {
	return { type: "REMOVE_COMPONENT", id };
}

export function setCurrentCategory(value) {
	return { type: "SET_CURRENT_CATEGORY", value };
}

export const ACTIONS = {
	REQUEST_CATEGORY: requestCategory,
	RECEIVE_CATEGORY: receiveCategory,
	ADD_COMPONENT: addComponent,
	REMOVE_COMPONENT: removeComponent,
	SET_CURRENT_CATEGORY: setCurrentCategory,
};
