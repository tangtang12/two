import axios from './index'

export function addCar(obj) {
    return axios.post('store/add',obj);
}

