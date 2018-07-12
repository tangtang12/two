import * as TYPES from "../action-types";

let init_state = {
  SLIDE: [],
  SWIPER_SLIDE: [],
  SHOW_IMG: []
};
export default function wander(state = init_state, action) {
    state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TYPES.WANDER_ALL_DATA:
      state[action.isWho] = action.data;
      break;
  }
  return state;
}
