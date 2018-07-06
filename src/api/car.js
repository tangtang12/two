import axios from './index'

export function addCar(obj) {
	return axios.post('store/add', obj);
}

//state不传或者是0都是加入购物车的信息，为1代表支付成功，为2代表支付失败
export function getCart(state) {
	return axios.get('store/info', {
		params: {
			state
		}
	})
}

export function modify(obj) {
	return axios.post('store/modify', obj)
}

//移除购物车的内容 ary为数组，里面包含每一个商品的ID,商品的color，商品的size,商品的num(数量)
export function remove(ary) {
	ary=JSON.stringify(ary);
	return axios.post('/store/remove',{
		data:ary
	})
}

//支付购物车的内容
export function pay(ary) {
    ary=JSON.stringify(ary);
    return axios.post('/store/pay',{
        data:ary
    })
}

//点击选中 默认是不选的