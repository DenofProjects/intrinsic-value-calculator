import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import intrinsicReducer from "../reducers/intrinsicReducer";

const rootReducer = combineReducers({
  intrinsicReducerState: intrinsicReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
