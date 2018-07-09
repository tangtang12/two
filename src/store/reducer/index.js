import { combineReducers } from "redux";
import home from "./home";
import person from "./person";
import cart from "./cart";
import classify from "./classify";
let reducer = combineReducers({ home, person, cart, classify });

export default reducer;
