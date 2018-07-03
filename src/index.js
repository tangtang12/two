import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import Qs from 'qs';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



    axios.defaults.baseURL = 'http://localhost:8000';
    axios.defaults.withCredentials = true;//允许跨域(并且携带cookie)
    axios.defaults.transformRequest = (data = {}) => Qs.stringify(data);//把post/put请求主体传递给服务器的内容统一处理为x-www-url-encoded格式
    axios.interceptors.response.use(result => result.data);//响应拦截器：把服务器返回的信息中响应主体内容拦截返回，以后在then中获取的结果就是主体内容

   axios.get('/home/query?lx=BANNER_LIST').then(result=>{
        console.log(result);
    });

axios.get('/home/query?lx=SLIDE').then(result=>{
    console.log(result);
});
