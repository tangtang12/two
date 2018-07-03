import * as TYPES from "../action-types";

let init_state = {

};

export default function home(state = init_state,action) {
    state = JSON.parse(JSON.stringify(state));
    
    switch (action.type){

    }
    return state;
}


