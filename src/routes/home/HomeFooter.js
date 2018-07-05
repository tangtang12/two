import React from "react";
import {withRouter,Link} from "react-router-dom";


export default class HomeFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return <div className="homeFooter">
            <div className="logreg">
                <Link to="/login" href="#" className="login">登录</Link>
                <span>|</span>
                <Link to="/register" href="#" className="register">注册</Link>
            </div>
            <address className="copyright">

                CopyRight©2007-2018 南京新与力文化传播有限公司

            </address>
        </div>
    }


}
