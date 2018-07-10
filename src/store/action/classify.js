import * as TYPES from "../action-types";
import { queryMenList } from "../../api/classify";

let classify = {
  getData(isWho) {
    return async dispatch => {
      let { code, data } = await queryMenList(isWho);
      if (code === 0) {
        dispatch({ type: TYPES.CLASSIFY_DATA, data, isWho });
      }
    };
  }
};
export default classify;
