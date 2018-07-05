import axios from './index'

export function addCar(id) {
    return axios.post('store/add',{
        params:{id}
    });
}
export function getCart(state){
    return axios.get('store/info',{
        params:{state}
    })
}