import * as TYPES from "../action-types";


let init_state = {
    isLogin: false
};

export default function home(state = init_state, action) {
    state = JSON.parse(JSON.stringify(state));

    switch (action.type){
        case TYPES.IS_LOGIN:
            let {isLogin} = action;
            state.isLogin = parseFloat(isLogin) === 0;
            break;
    }


    return state;


};







