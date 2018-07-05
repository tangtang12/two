import * as TYPES from "../action-types";
import {queryInfo} from "../../api/person";


let person = {

    isLogin(isLogin) {
        return {
            type: TYPES.IS_LOGIN,
            isLogin
        }
    },

    queryBaseInfo() {
        return {
            type: TYPES.PERSON_QUERY_INFO,
            payload: queryInfo()
        }
    }


};


export default person;


