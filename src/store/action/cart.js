import * as TYPES from "../action-types";
import { getCart } from "../../api/car";
//state为-1刚加入购物车 2支付成功  0是全部 1是支付失败
let cart = {
  getCart(cur) {
    return async dispatch => {
      let result = await getCart(cur);
      dispatch({ type: TYPES.GET_CART, payload: result });
    };
  },
  removeCart() {
    return {
      type: TYPES.REMOVE_CAR
    };
  },
  setNum(payload) {
    return {
      type: TYPES.SET_NUM,
      payload
    };
  },
  addCart() {
    return {
      type: TYPES.ADD_CAR,
      payload: getCart()
    };
  },
  pay() {
    return {
      type: TYPES.CART_PAY
    };
  },
  unsuccess() {
    return {
      type: TYPES.CART_UNSUCCESS
    };
  },
  check(time) {
    return {
      type: TYPES.CHECKED,
      time
    };
  },
  single(obj) {
    return {
      type: TYPES.SINGLE,
      obj
    };
  },
  allChecked(all) {
    return {
      type: TYPES.ALLCEHCKED,
      all
    };
  }
};

export default cart;
