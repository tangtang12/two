import React from "react";
import {connect} from "react-redux";
import {Icon, Button} from "antd"
import '../static/css/self.less'
import Transition from 'react-transition-group/Transition';
import {withRouter, Link} from 'react-router-dom'
import Guess from "./self/Guess";

const duration = 300,
    defaultStyle = {
        transition: `opacity ${duration}ms`,
        opacity: 0
    }, transitionStyles = {
        entering: {opacity: 0},
        entered: {opacity: 1}
    };


class Self extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            in: false
        }
    }

    handleClick = ev => {
        let target = ev.target,
            tarTag = target.tagName;
        if (tarTag === 'LI') {
            this.setState({in: false});
        }
    };


    render() {

        return <div className='fgg_Box'>
            <header className='headerNavBox'>
                <div className='homeBox'>
                    <div className='baseBox'>
                        <Icon type='left' style={{
                            fontSize: '.6rem',
                            marginTop: '.23rem'
                        }}/>

                        <span className='center'> 个人中心</span>

                        <Icon className='up' type='caret-up' style={{display: this.state.in ? "block" : 'none'}}/>
                        <Icon className='icon' type='bars' style={{
                            fontSize: '.6rem'
                        }} onClick={ev => {
                            this.setState({
                                in: !this.state.in
                            });
                        }}/>
                    </div>
                    <Transition in={this.state.in} timeout={0}>
                        {state => {
                            return <ul className='filterBox' style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                                display: this.state.in ? 'block' : 'none'
                            }} onClick={this.handleClick}>
                                <li type="header"><Icon type='home'/><span>首页</span></li>
                                <li type="list"><Icon type='layout'/><span>分类</span></li>
                                <li type="cart"><Icon type='shopping-cart'/><span>购物车</span></li>
                                <li type="personal"><Icon type='user'/><span>我的</span></li>
                            </ul>;
                        }}
                    </Transition>
                </div>
                <div className='login-button'>
                    <Button>登录/注册</Button>
                </div>
                <div className="shop">

                    <div className='shop-channel'>
                        <Link to='/self'>
                            <span className='shop-1'>默认购物频道</span>
                            <span className='shop-1-1'>男士MEN</span>
                            <Icon className='shop-1-T' type='right'/>
                        </Link>
                    </div>

                    <div className='order'>
                        <Link to='/self'>
                            <span className='shop-1'>我的订单</span>
                            <span className='shop-1-1'>全部订单</span>
                            <Icon className='shop-1-T' type='right'/>
                        </Link>
                    </div>
                    <ul className='address'>

                        <li><Icon type='pay-circle-o'/><span>待付款</span>
                        </li>
                        <li><Icon type='shop'/><span>待发货</span>
                        </li>
                        <li><Icon type='car'/><span>待收货</span>
                        </li>
                    </ul>
                    <ul className='address1'>

                        <li><p>0</p><span>商品收藏</span>
                        </li>
                        <li><p>0</p><span>品牌收藏</span>
                        </li>
                        <li><p>0</p><span>浏览记录</span>
                        </li>
                    </ul>

                    <div className='tip1'>
                        <Icon type='red-envelope' className='redBag'/>
                        <a href='javascript:;'>
                            <span className='shop-1'>优惠券</span>
                            <Icon className='shop-1-T' type='right'/>
                        </a>
                    </div>
                    <div className='tip1'>
                        <Icon type='pay-circle' className='redBag '/>
                        <a href='javascript:;' className='money'>
                            <span className='shop-1'>有货币</span>
                            <Icon className='shop-1-T' type='right'/>
                        </a>
                    </div>
                    <i className='space'/>
                    <div className='tip1'>
                        <Icon type='message' className='redBag'/>
                        <a href='javascript:;'>
                            <span className='shop-1'>查消息</span>
                            <Icon className='shop-1-T' type='right'/>
                        </a>
                    </div>
                    <div className='tip1'>
                        <Icon type='customer-service' className='redBag '/>
                        <a href='javascript:;' className='money'>
                            <span className='shop-1 '>服务与反馈</span>
                            <Icon className='shop-1-T box-f' type='right'/>
                        </a>
                    </div>

                    <i className='space'/>
                    <div className='you_bg'>

                    </div>
                    <div className='you_bg1'>
                    </div>
                    <i className='space'/>

                </div>

                <Guess/>

            </header>
        </div>;
    }
}

export default withRouter(connect()(Self));

