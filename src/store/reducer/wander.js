import * as TYPES from "../action-types";

let init_state = {};

export default function cart(state = init_state, action) {
  state = JSON.parse(JSON.stringify(state));
  return state;
}
