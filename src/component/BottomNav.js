import React from "react";
import {connect} from "react-redux";
import {Icon} from 'antd';
import {NavLink} from 'react-router-dom';

class BottomNav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <footer className='footerBox'>
            <NavLink to='/home'>
                <Icon type='home'/>
                <span>首页</span>
            </NavLink>
            <NavLink to='/classify'>
                <Icon type='appstore-o'/>
                <span>分类</span>
            </NavLink>
            <NavLink to='/wander'>
                <Icon type='rocket'/>
                <span>逛</span>
            </NavLink>
            <NavLink to='/cart'>
                <Icon type='shopping-cart'/>
                <span>购物车</span>
            </NavLink>
            <NavLink to='/self'>
                <Icon type='user'/>
                <span>我的</span>
            </NavLink>
        </footer>
    }
}

export default connect()(BottomNav);

