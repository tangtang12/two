import * as TYPES from "../action-types";


let person = {

    isLogin(isLogin) {
        return {
            type: TYPES.IS_LOGIN,
            isLogin
        }
    }


};


export default person;


