import * as TYPES from "../action-types";

let init_state = {
  homeData: {
    slide: {},
    iconsList: {},
    bannerList: {},
    hotCategory: {},
    bannerSlide: {},
    hotBrands: {},
    hotSingleGoods: {},
    maybeLike: [],
    n: 0
  }
};

export default function home(state = init_state, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TYPES.HOME_DATA:
      let { homeData: homeDataArr } = action;
      if (parseFloat(homeDataArr[0].code) === 0) {
        state.homeData.slide = homeDataArr[0].data;
        state.homeData.n++;
      }

      if (parseFloat(homeDataArr[1].code) === 0) {
        state.homeData.iconsList = homeDataArr[1].data;
        state.homeData.n++;
      }

      if (parseFloat(homeDataArr[2].code) === 0) {
        state.homeData.bannerList = homeDataArr[2].data;
        state.homeData.n++;
      }

      if (parseFloat(homeDataArr[3].code) === 0) {
        state.homeData.hotCategory = homeDataArr[3].data;
        state.homeData.n++;
      }

      if (parseFloat(homeDataArr[4].code) === 0) {
        state.homeData.bannerSlide = homeDataArr[4].data;
        state.homeData.n++;
      }

      if (parseFloat(homeDataArr[5].code) === 0) {
        state.homeData.hotBrands = homeDataArr[5].data;
        state.homeData.n++;
      }

      if (parseFloat(homeDataArr[6].code) === 0) {
        state.homeData.hotSingleGoods = homeDataArr[6].data;
        state.homeData.n++;
      }
      if (parseFloat(homeDataArr[7].code) === 0) {
        state.homeData.maybeLike = homeDataArr[7].data;
        state.homeData.n++;
      }
      break;
    case TYPES.MAYBE_LINK:
      state.maybeLike = action.data;
      break;
  }
  return state;
}
