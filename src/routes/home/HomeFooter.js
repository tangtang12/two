import React from "react";
import {Icon,BackTop} from "antd";

export default class HomeFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return <div className="homeFooter">
            <div className="logreg">
                <a href="#" className="login">登录</a>
                <span>|</span>
                <a href="#" className="register">注册</a>
                <BackTop/>
            </div>
            <address className="copyright">

                CopyRight©2007-2018 南京新与力文化传播有限公司

            </address>

        </div>
    }


}
