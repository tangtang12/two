import * as TYPES from "../action-types";
let init_data = {
  womenList: [],
  manList: [],
  kidsList: []
};
export default function classift(state = init_data, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TYPES.CLASSIFY_DATA:
      state[action.isWho] = action.data;
      break;
  }
  return state;
}
