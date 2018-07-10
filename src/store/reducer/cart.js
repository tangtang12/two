import * as TYPES from "../action-types";

let init_state = {
  unPay: [], //购物车数据
  Pay: [], //支付成功的数据
  unSuccess: [], //未支付成功
  allCart: [], //所有的数据
  all: false
};
function filterData(data, state) {
  data.allCart.forEach(item => {
    item.isCheck ? (item.state = state) : null;
  });
  data.unPay = state.allCart.filter(item => item.state === -1);
  data.unSuccess = state.allCart.filter(item => item.state === 1);
  data.Pay = state.allCart.filter(item => item.state === 2);
}
export default function cart(state = init_state, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TYPES.GET_CART:
      let { code, data } = action.payload;
      if (parseFloat(code) === 0) {
        switch (action.state) {
          case 0:
            state.allCart = data;
            break;
          case -1:
            state.unPay = data;
            break;
          case 1:
            state.unSuccess = data;
            break;
          case 2:
            state.Pay = data;
            break;
          default:
            state.unPay = data;
        }
      }
      break;
    case TYPES.REMOVE_CAR:
      state.unPay = state.unPay.filter(item => !item.isCheck);
      break;
    case TYPES.SET_NUM:
      let { id, num, time } = action.payload,
        result = state.unPay.find(item => item.id == id && item.time == time);
      result ? (result.num = parseFloat(num)) : null;
      break;
    case TYPES.ADD_CAR:
      {
        let { code, data } = action.payload;
        code === 0 ? (state.unPay = data) : null;
      }
      break;
    case TYPES.CART_PAY:
      filterData(state, 2);
      break;
    case TYPES.CART_UNSUCCESS:
      filterData(state, 1);
      break;
    case TYPES.CHECKED:
      state.unPay.forEach(
        item =>
          item.time == action.time ? (item.isCheck = !item.isCheck) : null
      );
      state.all = state.unPay.every(item => item.isCheck);
      break;
    case TYPES.SINGLE:
      state.allCart.forEach(item => {
        item.time == action.obj.time ? item.state === 2 : null;
      });
      state.unPay = state.allCart.filter(item => item.state === -1);
      state.unSuccess = state.allCart.filter(item => item.state === 1);
      state.Pay = state.allCart.filter(item => item.state === 2);
      break;
    case TYPES.CANCEL:
      state.allCart.filter(item => item.time !== action.time);
      state.unPay = state.allCart.filter(item => item.state === -1);
      state.unSuccess = state.allCart.filter(item => item.state === 1);
      state.Pay = state.allCart.filter(item => item.state === 2);
      break;
    case TYPES.ALLCEHCKED:
      state.all = !state.all;
      state.allCart.forEach(item => {
        item.state === -1 ? (item.isCheck = state.all) : null;
      });
      state.unPay.forEach(item => {
        item.state === -1 ? (item.isCheck = state.all) : null;
      });
      break;
  }
  return state;
}
