import * as TYPES from "../action-types";

let init_state = {
    homeData: {
        slide: {},
        iconsList: {},
        bannerList: {},
        hotCategory: {},
        bannerSlide: {},
        hotBrands: {},
        hotSingleGoods: {}
    }
};

export default function home(state = init_state, action) {
    state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case TYPES.HOME_DATA:
            let {homeData:homeDataArr} = action;
            console.log(homeDataArr);
            if (parseFloat(homeDataArr[0].code) === 0) state.homeData.slide = homeDataArr[0].data;
            if (parseFloat(homeDataArr[1].code) === 0) state.homeData.iconsList = homeDataArr[1].data;
            if (parseFloat(homeDataArr[2].code) === 0) state.homeData.bannerList = homeDataArr[2].data;
            if (parseFloat(homeDataArr[3].code) === 0) state.homeData.hotCategory = homeDataArr[3].data;
            if (parseFloat(homeDataArr[4].code) === 0) state.homeData.bannerSlide = homeDataArr[4].data;
            if (parseFloat(homeDataArr[5].code) === 0) state.homeData.hotBrands = homeDataArr[5].data;
            if (parseFloat(homeDataArr[6].code) === 0) state.homeData.hotSingleGoods = homeDataArr[6].data;
            console.log(state);
            break;
    }
    return state;
}


