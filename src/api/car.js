import axios from './index'

export function addCar(obj) {
	return axios.post('/store/add', obj);
}

//state不传或者是0都是加入购物车的信息，为1代表支付成功，为2代表支付失败
export function getCart(state) {
	return axios.get('/store/info', {
		params: {
			state
		}
	})
}

export function modify(obj) {
	return axios.post('/store/modify', obj)
}

//移除购物车的内容
export function remove() {
	return axios.get('/store/remove')
}

//支付购物车的内容
export function pay() {
	return axios.post('/store/pay')
}

export function Unpay() {
	return axios.post('/store/unpay')
}

//点击选中 默认是不选的

export function selected(obj){
	return axios.post('/store/check',obj)
}

