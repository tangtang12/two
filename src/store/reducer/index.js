import { combineReducers } from "redux";
import home from "./home";
import person from "./person";
import cart from "./cart";
import classify from "./classify";
import wander from "./wander";
let reducer = combineReducers({ home, person, cart, classify, wander });

export default reducer;
