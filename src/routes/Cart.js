import React from "react";
import { connect } from "react-redux";
import { Icon, Button } from "antd";
import "../static/css/cart.less";
import { isLogin } from "../api/person";

import CartLogin from "./cartLogin/CartLogin";
import action from "../store/action";
import { Link } from "react-router-dom";
import BottomNav from "../component/BottomNav";

class Cart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: null,
      collapsed: [],
      results: {},
      CartData: {}
    };
  }

  async componentWillMount() {
    let results = await isLogin();
    console.log(this.props);
    if (this.props.unPay.length === 0) {
      this.props.getCart();
    }
    if (this.props.homeData.maybeLike.length === 0) {
      this.props.queryMaybe();
    }
    this.setState({
      data: this.props.homeData.maybeLike, //类似猜你喜欢的数据
      results,
      CartData: this.props.unPay
    });
  }

  render() {
    let data = this.state.data;
    if (!data) return "";
    return (
      <section className="cartBox">
        {/*头部*/}
        <div className="homeBox1">
          <div className="baseBox">
            <Icon
              type="left"
              style={{
                fontSize: ".6rem",
                marginTop: ".23rem"
              }}
              onClick={ev => this.props.history.go(-1)}
            />
            <span className="center">购物车</span>
            {this.state.results.code === 0 ? (
              <span
                onClick={this.toggleCollapsed}
                style={{
                  position: "absolute",
                  top: ".35rem",
                  left: "6.6rem"
                }}
              >
                {this.state.collapsed ? "编辑" : "完成"}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        {this.state.results.code === 0 ? (
          <CartLogin collapsed={this.state.collapsed} />
        ) : (
          <div>
            <p className="cartLogin">
              <Icon type="info-circle-o" />
              请您先
              <a
                className="login"
                href="javascript:;"
                onClick={ev => this.props.history.push("/login")}
              >
                登录
              </a>
              可以同步电脑和手机的商品
            </p>
            <div className="priceCartBox">
              <div className="cart-zero">
                <Icon type="shopping-cart" />
                <p>您的购物车暂无商品</p>
                <a href="#">随便逛逛</a>
              </div>
            </div>
          </div>
        )}

        <BottomNav />
      </section>
    );
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
}
//queryMaybe: action.home.queryMaybe
export default connect(
  state => ({ ...state.home, ...state.cart }),
  { ...action.person, ...action.cart, ...action.home }
)(Cart);
