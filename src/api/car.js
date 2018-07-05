import axios from './index'

export function addCar(id) {
    return axios.post('store/add',{
        id
    });
}

 function aa(state) {
    return axios.get('store/info',{
        params:{
            state
        }

    });
}
aa(0).then(res=>{
    console.log(res);})