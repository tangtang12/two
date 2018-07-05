import axios from './index';

//获取商品列表或详情，传参是详情不传参是商品列表

export default function queryCommodity(id) {
    return axios.get('/course/info',{
        params:{
            id
        }
    })
}
