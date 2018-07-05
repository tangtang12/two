import React from "react";
import {connect} from "react-redux";
import {Icon, Button} from "antd";
import "../static/css/cart.less";
import {query} from "../api/home";
import {isLogin} from "../api/person";
import {getCart} from "../api/car";
import CartLogin from "./cartLogin/CartLogin";
import action from "../store/action";
import {Link} from "react-router-dom";


class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: null,
            collapsed: true,
            results:{},
            CartData:{}
        };
    }

    async componentWillMount() {
        let result = await query("maybe_link");
        let results = await isLogin();
        let CartData=await getCart();
        if (result.code === 0) {
            this.setState({
                data: result.data,results,CartData
            });
        }

        this.setState({})

    }

    render() {
        let data = this.state.data;
        if (!data) return "";
        return <section className="cartBox">
            {/*头部*/}
            <div className='homeBox1'>
                <div className='baseBox'>
                    <Icon type='left' style={{
                        fontSize: '.6rem',
                        marginTop: '.23rem'
                    }} onClick={ev => this.props.history.go(-1)}/>
                    <span className='center'>购物车</span>
                    {this.state.results.code===0?
                        <span onClick={this.toggleCollapsed} style={{
                        position: 'absolute',
                        top: '.35rem',
                        left: '6.6rem'
                    }}>
                        {this.state.collapsed ? '编辑' : '完成'}
                    </span>:''}
                </div>

            </div>


            {this.state.results.code===0?<CartLogin collapsed={this.state.collapsed}/>: <div>
                <p className="cartLogin">
                    <Icon type="info-circle-o"/>
                    请您先
                    <a className="login" href="javascript:;" onClick={ev => this.props.history.push("/login")}>登录</a>
                    可以同步电脑和手机的商品
                </p>
                <div className="priceCartBox">
                    <div className="cart-zero">
                        <Icon type="shopping-cart"/>
                        <p>您的购物车暂无商品</p>
                        <a href="#">随便逛逛</a>
                    </div>
                </div>
            </div>}

            <div className="forYou" style={{marginTop: '.2rem'}}>
                <p className="title">为你优选商品</p>
                <ul className="goods-list">
                    {data.map((item, index) => {
                        return <li className="goods-info" key={index}>
                            <div className="imgBox">
                                <Link href="#" to={`/details?id=${item.id}`}>
                                    <img src={item.pic} alt={item.desc}/>
                                </Link>
                                <div className="similar"></div>
                            </div>
                            <div className="detail">
                                <p className="name">{item.desc}</p>
                                <p className="price">¥{item.price}
                                    <del>{item.oldPrice}</del>
                                </p>
                                <Icon className="similarIcon" type="ellipsis"></Icon>
                            </div>
                        </li>
                    })}
                </ul>
            </div>


        </section>;
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

}

export default connect(...state => state.home, action.person)(Cart);

