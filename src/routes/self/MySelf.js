import React from "react";
import {connect} from "react-redux";
import {Icon, Button} from "antd"
import Transition from 'react-transition-group/Transition';
import {withRouter, Link, Switch, Route} from 'react-router-dom'
import action from "../../store/action/index"
import {query} from '../../api/home'
import {isLogin, exitLogin} from "../../api/person";


const duration = 300,
    defaultStyle = {
        transition: `opacity ${duration}ms`,
        opacity: 0
    }, transitionStyles = {
        entering: {opacity: 0},
        entered: {opacity: 1}
    };


class MySelf extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            in: false,
            data: [],
            isLogin: false
        };
    }

    async componentWillMount() {
        let {baseInfo, queryBaseInfo} = this.props;
        !baseInfo ? queryBaseInfo() : null;

        if (this.state.isLogin) return;
        let result = await isLogin();
        if (parseFloat(result.code) === 0) {
            this.setState({
                isLogin: true
            });
        }
    }

    async componentDidMount() {
        let result = await query("MAYBE_LINK");
        let {data} = result;
        this.setState({
            data,
        });
    }

    exitLogin = async () => {
        let result = await exitLogin();
        if (parseFloat(result.code) === 0) {
            this.setState({
                isLogin: false
            });
        }
    };


    render() {
        let baseInfo = this.props.baseInfo;
        let {isLogin} = this.state;
        if (!baseInfo && isLogin) return "";
        let {data} = this.state;
        return <div>
            <header className='headerNavBox'>
                {/*头部导航*/}
                <div className='homeBox1'>
                    <div className='baseBox'>
                        <Icon type='left' style={{
                            fontSize: '.6rem',
                            marginTop: '.23rem'
                        }} onClick={this.back}/>

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
                                <li type="header" onClick={ev => this.props.history.push("/home")}><Icon
                                    type='home'/><span>首页</span></li>
                                <li type="list" onClick={ev => this.props.history.push("/classify")}><Icon
                                    type='layout'/><span>分类</span></li>
                                <li type="cart" onClick={ev => this.props.history.push("/cart")}><Icon
                                    type='shopping-cart'/><span>购物车</span></li>
                                <li type="personal" onClick={ev => this.props.history.push("/self")}><Icon type='user'/><span>我的</span>
                                </li>
                            </ul>;
                        }}
                    </Transition>
                </div>
                {/*登录注册*/}
                <div className='login-button'>
                    {!isLogin ? <Button><Link to='/login'>登录/注册</Link></Button> :
                        <div>
                            <div className="userPic" style={{
                                backgroundImage: "url('//img12.static.yhbimg.com/goodsimg/2018/06/02/18/0268f8760b6f65eb41beb1224c7203dea9.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60')",
                                backgroundSize: "cover"
                            }}></div>
                            <div className="userInfo">
                                <p>{baseInfo.username}</p>
                                <p>{baseInfo.kouling}</p>
                            </div>
                            <Button type="danger" onClick={this.exitLogin} className="exit">退出</Button>
                        </div>
                    }

                </div>
                {/*状态栏*/}
                <div className="shop">
                    <div className='shop-channel'>
                        <Link to='/self'>
                            <span className='shop-1'>默认购物频道</span>
                            <span className='shop-1-1'>男士MEN</span>
                            <Icon className='shop-1-T' type='right'/>
                        </Link>
                    </div>

                    <div className='order'>
                        <Link to='/self/orders'>
                            <span className='shop-1'>我的订单</span>
                            <span className='shop-1-1'>全部订单</span>
                            <Icon className='shop-1-T' type='right'/>
                        </Link>
                    </div>

                    <ul className='address'>
                        <li><Link to="/self/orders?type=1"><Icon type='pay-circle-o'/><span>待付款</span>
                        </Link></li>
                        <li><Link to="self/orders?type=2"><Icon type='shop'/><span>待发货</span>
                        </Link>
                        </li>
                        <li><Link to="self/orders?type=3"><Icon type='car'/><span>待收货</span></Link>
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
                {/*为你优选*/}
                <div className='guess'>
                    <div className="toper"
                         style={{color: 'black', fontSize: '.26rem', borderBottom: '.02rem solid #e0e0e0',}}>
                   <span style={{
                       marginLeft: '.5rem',
                       borderLeft: '.05rem solid',
                       paddingLeft: '.3rem'
                   }}>为你优选</span>
                    </div>
                    <ul className='bg_data clearfix'>

                        {data.length === 0 ? '' : data.map((item, index) => {
                            let {pic, desc, price} = item;
                            return <li className='li_box' key={index}>
                                <div className='none' style={{
                                    background: `url(${pic}) no-repeat`,
                                    backgroundSize: "cover"
                                }}>
                                    <div className='cover_f' id='link'>
                                        <span>找相似</span>
                                        <i className='none-1'/>
                                    </div>
                                </div>
                                <a className='desc'>{desc}</a>
                                <span className='price'>￥{price}</span>
                                <p className='act'>...</p>
                            </li>
                        })}
                    </ul>

                </div>
                {/*回到顶部*/}
                {!isLogin ? <div className='shop2 clearfix'>
                    <Link to='/login'>
                        <span className='shop-1'>登录</span>
                        <b>|</b></Link>
                    <Link to='/register'> <span className='shop-1-1'>注册</span></Link>
                    <a href="javascript:;" onClick={ev => document.documentElement.scrollTop = 0}> <span
                        className='top'>回到顶部</span>
                        <b>^</b>
                    </a>
                </div> : ""}
                <div className='foo-f'>

                    CopyRight©2007-2018 南京新与力文化传播有限公司

                </div>

            </header>
        </div>
    }


    handleClick = ev => {
        let target = ev.target,
            tarTag = target.tagName;
        if (tarTag === 'LI') {
            this.setState({in: false});
        }
    };

    back = () => {
        let {history} = this.props;
        history.go(-1)
    }

}

export default withRouter(connect(state => ({...state.person}), {...action.person, ...action.homeData})(MySelf));

