import React from "react";
import {connect} from "react-redux";
import {Icon,Button} from "antd";
import "../static/css/cart.less";

class Cart extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {

        return <section className="cartBox">
            <p className="cartLogin">
                <Icon type="info-circle-o"/>
                请您先
                <a className="login" href="#">登录</a>
                可以同步电脑和手机的商品
            </p>

            <div className="priceCartBox">
                <div className="cart-zero">
                    <Icon type="shopping-cart" />
                    <p>您的购物车暂无商品</p>
                    <a href="#">随便逛逛</a>
                </div>
            </div>

        </section>
    }
}

export default connect()(Cart);

