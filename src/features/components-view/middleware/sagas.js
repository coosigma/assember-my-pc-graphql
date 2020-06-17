import { put, takeLatest } from "redux-saga/effects";

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

function* fetchCategory({ name, uri }) {
	let json = yield fetch(uri)
		.then(handleErrors)
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
	json = { [name]: json.components };
	yield put({ type: "RECEIVE_CATEGORY", json });
}
export default function* allComponentsWatcher() {
	yield takeLatest("REQUEST_CATEGORY", fetchCategory);
}
