import axios from './index'
//获取class数据
export  function queryMenList(classMen) {
  return  axios.get(`/classify/query?lx=${classMen}`)
}

