import * as TYPES from "../action-types";

let init_state = {
    getCart: {

    }
};

export default function cart(state = init_state, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.CART_ADD_NUM:
            let {getCart} = action;
state.getCart=parseFloat(getCart)===0;
            break;
    }
    return state;
}


