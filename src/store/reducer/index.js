import {combineReducers} from "redux";
import home from "./home"
import person from "./person";

let reducer = combineReducers({home, person});

export default reducer;
