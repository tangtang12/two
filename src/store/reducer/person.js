import * as TYPES from "../action-types";


let init_state = {
    isLogin: false,
    baseInfo: null
};

export default function home(state = init_state, action) {
    state = JSON.parse(JSON.stringify(state));
    let payload = {};
    switch (action.type){
        case TYPES.IS_LOGIN:
            let {isLogin} = action;
            state.isLogin = parseFloat(isLogin) === 0;
            break;
        case TYPES.PERSON_QUERY_INFO:
            payload = action.payload;
            parseFloat(payload.code) === 0 ? state.baseInfo = payload.data : null;

            state.baseInfo.username = +new Date();
            state.baseInfo.kouling = `#` + `${Math.floor(Math.random()*1000000000000+100000000000)}` + `#`;

            break;
    }
    return state;

};







