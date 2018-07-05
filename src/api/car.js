import axios from './index'

export function addCar(obj) {
	return axios.post('store/add', obj);
}


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