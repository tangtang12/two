import axios from './index'

export function addCar(obj) {
    return axios.post('store/add',obj);
}


export function getCart(state){
    return axios.get('store/info',{
        params:{state}
    })
}

export function CartData(CartData){
    return axios.get('store/DataFGG',{
        params:{CartData}
    })
}


