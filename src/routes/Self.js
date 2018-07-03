import React from "react";
import {connect} from "react-redux";
import {Icon}from "antd"
import {Switch,Route,Redirect,Link}from 'react-router-dom'
import '../static/css/personal.less'

class Self extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <section className='personal'>
            <header>
                {/*<a> <Icon type='left'/></a>*/}
                {/*<span>个人中心</span>*/}
                {/*<div> <Icon type='bars'/></div>*/}
            </header>
        </section>
    }
}

export default connect()(Self);

