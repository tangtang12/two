import * as TYPES from "../action-types";
import queryData from "../../api/wander";

let wonder = {
  allData(isWho) {
    return async dispatch => {
      let { code, data } = await queryData(isWho);
      if (code === 0) {
        dispatch({
          type: TYPES.WANDER_ALL_DATA,
          data,
          isWho
        });
      }
    };
  }
};

export default wonder;
