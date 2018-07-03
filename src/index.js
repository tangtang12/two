<<<<<<< HEAD
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
=======
import React from "react";
import ReactDOM,{render} from "react-dom";
import {Provider} from "react-redux";
import {HashRouter,Route,Switch,Redirect} from "react-router-dom";
import {LocaleProvider} from "antd";
import zh_CH from "antd/lib/locale-provider/zh_CN";
import store from "./store";
import Home from "./routes/Home";
import Classify from "./routes/Classify";
import Wander from "./routes/Wander";
import Cart from "./routes/Cart";
import Self from "./routes/Self";
import Yoho from "./routes/Yoho";
import BottomNav from "./component/BottomNav";


render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CH}>
            <div>
                {/*公共插件*/}

                <main className="container">
                    <Switch>
                        <Route path="/" exact component={Yoho}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/classify" component={Classify}/>
                        <Route path="/wander" component={Wander}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/self" component={Self}/>
                        <Redirect to="/"/>
                    </Switch>
                </main>
                {/*公共插件*/}
                <BottomNav/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>,window.root);



















>>>>>>> 398c32439746c4578b9d0865472c590fa8be4a20
