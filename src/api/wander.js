    import axios from './index';
export default function queryData(type) {
  return   axios.get('/wander/query',{
        params:{
            lx:type
        }
    })
}