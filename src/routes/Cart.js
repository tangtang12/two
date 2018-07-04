import React from "react";
import {connect} from "react-redux";
import {Icon,Button} from "antd";
import "../static/css/cart.less";
import {query} from "../api/home";

class Cart extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            data: null
        }
    }

   async  componentWillMount() {
      let result   = await query("maybe_link");
     if (result.code === 0) {
         this.setState({
             data: result.data
         });
     }
    }

    render() {
        let data = this.state.data;
        if (!data) return "";


        return <section className="cartBox">
            <p className="cartLogin">
                <Icon type="info-circle-o"/>
                请您先
                <a className="login" href="#">登录</a>
                可以同步电脑和手机的商品
            </p>

            <div className="priceCartBox">
                <div className="cart-zero">
                    <Icon type="shopping-cart"/>
                    <p>您的购物车暂无商品</p>
                    <a href="#">随便逛逛</a>
                </div>
            </div>

            <div className="forYou">
                <p className="title">为你优选商品</p>
                <ul className="goods-list">
                    {data.map((item, index) => {
                        return   <li className="goods-info" key={index}>
                            <div className="imgBox">
                                <a href="#">
                                    <img src={item.pic} alt={item.desc}/>
                                </a>
                                <div className="similar"></div>
                            </div>
                            <div className="detail">
                                <p className="name">{item.desc}</p>
                                <p className="price">¥{item.price} <del>{item.oldPrice}</del></p>
                                <Icon className="similarIcon" type="ellipsis"></Icon>
                            </div>
                        </li>
                    })}
                </ul>
            </div>


        </section>;
    }
}

export default connect(state=>state.home)(Cart);

