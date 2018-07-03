import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import reduxLogger from "redux-logger";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";

let store = createStore(reducer, applyMiddleware(reduxPromise, reduxThunk, reduxLogger));

export default store;
