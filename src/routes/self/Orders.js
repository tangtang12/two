import React from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import action from "../../store/action";
import {Icon} from "antd";

class Orders extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return <div className="ordersBox">
            <a href="javascript:;" className="order-tip">
                <Icon type="right"/>
                <span className="tipTitle">
                    关于防诈骗的提醒
                </span>
                <span className="tipContent">
                    有货不会以任何理由要求您退货退款，请您提高警惕。
                </span>
            </a>

            <ul className="order-nav clearfix">
                <li className="active">
                    <Link to="/self/orders?type=1">全部</Link>
                </li>
                <li>
                    <Link to="/self/orders?type=2">待付款</Link>
                </li>
                <li>
                    <Link to="/self/orders?type=3">待发货</Link>
                </li>
                <li>
                    <Link to="/self/orders?type=4">待收货</Link>
                </li>
            </ul>
            <div className="order-container">
                <div className="no-order">
                    <div className="icon"><Icon type="file-text"/></div>
                    <span>您还没有下订单</span>
                    <a href="#">随便逛逛</a>
                </div>

                <div className="hasOrders">
                    <div className="order">
                        <header className="header">
                            订单编号:d645548788w544w
                            <span className="order-status">待付款</span>
                        </header>
                        <section className="order-goods">
                            <div className="order-good">
                                <div className="orderPic">
                                    <img
                                        src="//img10.static.yhbimg.com/goodsimg/2018/02/14/14/01a89c0d56f4003e3dc365f8aa852b97ed.jpg?imageMogr2/thumbnail/90x120/background/d2hpdGU=/position/center/quality/80"
                                        alt=""/>
                                </div>
                                <div className="deps">
                                    <p className="name">SANKUANZ 图案印花T恤</p>
                                    <p className="">
                                        <span className="color">颜色:黑色</span>
                                        <span className="size">尺码:M</span>
                                    </p>
                                    <p className="wrap">
                                        <span className="price">¥581</span>
                                        <span className="price">¥581</span>
                                    </p>
                                </div>
                            </div>
                        </section>
                        <footer className="footer"> </footer>
                        <div className="order-opt"></div>
                    </div>
                </div>

            </div>


        </div>;
    }
}

export default withRouter(connect(state => ({...state.person}), {...action.person, ...action.homeData})(Orders));

