import * as TYPES from "../action-types";
import queryData from "../../api/wander";

let home = {
  allData(isWho) {
    return async dispatch => {
      let { code, data } = await queryData(isWho);
      if (code === 1) {
        dispatch({
          type: TYPES.WANDER_ALL_DATA,
          data
        });
      }
    };
  }
};

export default home;
