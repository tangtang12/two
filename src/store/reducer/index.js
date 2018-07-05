import {combineReducers} from "redux";
import home from "./home"
import person from "./person";
import cart from "./cart";

let reducer = combineReducers({home, person,cart});

export default reducer;
