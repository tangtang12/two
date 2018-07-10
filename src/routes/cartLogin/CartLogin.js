import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import action from "../../store/action";
import "./CartLogin.less";
import {Icon, Button} from "antd";
import Box from "../../component/Box";
import Pay from "../../component/Pay";

import {modify, selected, remove, bothChecked} from "../../api/car";

class Collapsed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num,
        };
    }

    //修改商品数量
    modify = async obj => {
        let res = await modify(obj);
    };

    getNum = num => {
        this.setState({
            num
        });
    };

    render() {
        let {desc, name, price, id, size, color, isCheck, time} = this.props;
        return (
            <a href="javascript:;">
                <div
                    className="select-f"
                    onClick={this.selectedOne.bind(this, {
                        time
                    })}
                >
                    {isCheck ? <Icon type="check"/> : ""}
                </div>
                <div className="tip-shop-2">x{this.state.num}</div>
                {this.props.collapsed ? (
                    <ul className="desc-shop-f">
                        <li className="tip-shop-1">{name}</li>
                        <li className="tip-shop-3">{desc}</li>
                        <li className="tip-shop-4">￥{price}</li>
                    </ul>
                ) : (
                    <div>
                        <Box
                            id={id}
                            modify={this.modify}
                            num={this.state.num}
                            max={10}
                            min={0}
                            getNum={this.getNum || ""}
                            time={time}
                        />
                        <span className="colorSize">
              颜色：{color}&nbsp;&nbsp;尺码:{size}
            </span>
                        <p className="colorPrice">￥{price}</p>
                    </div>
                )}
            </a>
        );
    }

    selectedOne = async obj => {
        let res = await selected(obj); //服务器传的
        await this.props.check(obj.time); //redux传的
    };
}

class CartLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            selectedTwo: [],
            getInfo: [],
            bothChecked: [],
            price: 0,
            num: 0
        };
    }

    async componentWillMount() {
        if (this.props.unPay.length === 0) {
            await this.props.getCart();
           await this.props.getAllChecked();
        }

    }

    render() {
        return (
            <div className="cartLogin-f">



                {/*减运费*/}
                <div className="tip-plus">
          <span>
            再买￥<p>555</p>即可免运费
          </span>
                    <Link to="/classify">去凑单 &gt; </Link>
                </div>
                {/*商品信息和价格*/}
                {this.props.unPay.length === 0
                    ? ""
                    : this.props.unPay.map((item, index) => {
                        let {
                            hot,
                            pic = [],
                            name,
                            num,
                            desc,
                            price,
                            id,
                            size,
                            color,
                            isCheck,
                            time
                        } = item;
                        return (
                            <div key={index}>
                                <div className="tip-plus tip2">
                                    <Icon type="tag-o"/>
                                    <span>{hot}</span>
                                    <Link to="/classify">去凑单 &gt; </Link>
                                </div>
                                <div className="shop_f">
                                    <div
                                        className="select-f"
                                        onClick={() => {
                                            this.setState({
                                                selected: !this.state.selected
                                            });
                                        }}
                                    >
                                        <Icon type={this.state.selected ? "check" : ""}/>
                                    </div>
                                    <img src={pic instanceof Array ? pic[0] : pic}/>
                                    <Collapsed
                                        num={num}
                                        name={name}
                                        desc={desc}
                                        price={price}
                                        id={id}
                                        collapsed={this.props.collapsed}
                                        size={size}
                                        color={color}
                                        isCheck={isCheck}
                                        time={time}
                                        all={this.props.all}
                                        allChecked={this.props.allChecked}
                                        check={this.props.check}
                                    />
                                </div>
                            </div>
                        );
                    })}
                {this.props.unPay.length===0?  <div className="priceCartBox">
                    <div className="cart-zero">
                        <Icon type="shopping-cart" />
                        <p>您的购物车暂无商品</p>
                        <a href="#">随便逛逛</a>
                    </div>
                </div>:null}
                {this.props.collapsed ? (
                    <div>
                        <div className="message-f">
                            <Icon type="pay-circle-o"/>
                            <span>全场加价购</span>
                            <a href="#">
                                去换购 <p style={{color: "#bfbfbf"}}>&gt;</p>
                            </a>
                        </div>
                        <div
                            className="price-all"
                            style={{
                                marginBottom: ".2rem",
                                height: ".9rem",
                                lineHeight: ".9rem",
                                background: "#fff"
                            }}
                        >
                            <span style={{margin: ".2rem", fontSize: ".3rem"}}>总计</span>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {/*底部*/}

                {this.props.collapsed ? (
                    <div className="login-all" style={{zIndex: "99999"}}>
                        <div>
                            <a
                                className="login-all-a"
                                href="javascript:;"
                                onClick={this.checked}
                            >
                                {this.props.all ? <Icon type="check"/> : ""}
                            </a>
                            <p>全选</p>
                            <span className="span-f">
                总计：￥{parseFloat(this.props.prices)}.00（{parseFloat(
                                this.props.nums
                            )}件）
              </span>
                            <p
                                style={{
                                    left: "4rem",
                                    fontSize: ".27rem",
                                    color: "#999",
                                    paddingLeft: ".1rem"
                                }}
                            >
                                不含运费
                            </p>
                            <Pay text="结算" num={this.state.num}/>
                        </div>
                    </div>
                ) : (
                    <div className="login-all" style={{zIndex: "99999"}}>
                        <div>
                            <a
                                className="login-all-a"
                                href="javascript:;"
                                onClick={this.checked}
                            >
                                {this.props.all ? <Icon type="check"/> : ""}
                            </a>
                            <p>全选</p>
                            <Button
                                style={{
                                    background: "#555",
                                    right: "2.4rem"
                                }}
                            >
                                移入
                                <br/>
                                收藏夹
                            </Button>
                            <Button onClick={this.removes}>删除</Button>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    removes = async () => {
        let resul = await remove();
        if (resul.code === 0) {
            window.location.reload();
        }
    };


    //全选的点击事件
    checked =  () => {
        this.props.allChecked();
    }


}

export default withRouter(
    connect(
        state => state.cart,
        action.cart
    )(CartLogin)
);
