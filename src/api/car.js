import axios from './index'

export function addCar(id) {
    return axios.post('store/add',{
        params:{id}
    });
}