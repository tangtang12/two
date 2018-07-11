import * as TYPES from "../action-types";
import { query } from "../../api/home";
import queryData from "../../api/wander";

let home = {
  queryData() {
    return async dispatch => {
      let homeData = await Promise.all([
        query("SLIDE"),
        query("ICONS_LIST"),
        query("BANNER_LIST"),
        query("HOT_CATEGORY"),
        query("BANNER_SLIDE"),
        query("HOT_BRANDS"),
        query("HOT_SINGLE_GOODS"),
        query("MAYBE_LINK")
      ]);
      dispatch({
        type: TYPES.HOME_DATA,
        homeData
      });
    };
  },
  queryMaybe() {
    return async dispatch => {
      let { code, data } = await query("MAYBE_LINK");
      if (code === 0) {
        dispatch({ type: TYPES.MAYBE_LINK, data });
      }
    };
  }
};

export default home;
