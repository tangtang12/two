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
import Details from "./routes/Details";
import Login from './routes/self/Login';
import Register from "./routes/self/Register";
import './static/css/reset.min.css';
import "./static/css/common.less";
import GoTop from "./component/GoTop";



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
                        <Route path="/details" component={Details}/>
                        <Route path='/login' component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Redirect to="/"/>
                    </Switch>
                </main>
                {/*公共插件*/}
                <BottomNav></BottomNav>
                <GoTop/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, window.root);























