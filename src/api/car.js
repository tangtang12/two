import axios from "./index";

export function addCar(obj) {
  return axios.post("/store/add", obj);
}

//state不传或者是0都是加入购物车的信息，为2代表支付成功，为1代表支付失败
export function getCart(state) {
  return axios.get("/store/info", {
    params: {
      state
    }
  });
}

export function modify(obj) {
  return axios.post("/store/modify", obj);
}

//移除购物车的内容
export function remove() {
  return axios.post("/store/remove");
}

//支付购物车的内容
export function pay() {
  return axios.post("/store/pay");
}

//未支付成功
export function Unpay() {
  return axios.post("/store/unpay");
}

//点击选中 默认是不选的
export function selected(obj) {
  return axios.post("/store/check", obj);
}

//单个付款
export function payOne(obj) {
  return axios.post("/store/singlepay", obj);
}

//退货退款
export function cancel(obj) {
  return axios.post("/store/cancel", obj);
}

//全选与非全选
export function allChecked(allCheck) {
  return axios.post("/store/allcheck", {
    allCheck
  });
}
