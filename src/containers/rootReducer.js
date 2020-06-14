import { combineReducers } from "redux-immutable";
import componentsViewReducers from "../features/components-view/reducers";

const rootReducer = combineReducers(componentsViewReducers);

export default rootReducer;
