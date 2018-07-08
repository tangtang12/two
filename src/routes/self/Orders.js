import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import action from "../../store/action";
import { Icon } from "antd";
import Qs from "qs";
import TopNav from "../../component/TopNav";
import { getCart, payOne, cancel } from "../../api/car";

class Orders extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    setTimeout(async () => {
      this.type = parseFloat(this.props.location.search.slice(-1));
      let result = await getCart(this.type);
      if (result.code === 0) {
        this.setState({
          data: result.data
        });
      }
    }, 0);
  }

  changeStatus = () => {
    setTimeout(async () => {
      this.type = parseFloat(this.props.location.search.slice(-1));
      let result = await getCart(this.type);
      if (result.code === 0) {
        this.setState({
          data: result.data
        });
      }
    }, 0);
  };

  render() {
    let orderNav = ["全部", "待付款", "待发货", "待收货"];
    let data = this.state.data;
    return (
      <div className="ordersBox">
        <div className="topNavBox">
          <Icon
            type="left"
            onClick={() => {
              this.props.history.push("/self");
            }}
          />
          <span>我的订单</span>
        </div>

        <a href="javascript:;" className="order-tip">
          <Icon type="right" />
          <span className="tipTitle">关于防诈骗的提醒</span>
          <span className="tipContent">
            有货不会以任何理由要求您退货退款，请您提高警惕。
          </span>
        </a>

        <ul className="order-nav clearfix">
          {orderNav.map((item, index) => {
            let type = parseFloat(this.props.location.search.slice(-1));
            return (
              <li key={index} className={type === index ? "active" : ""}>
                <Link
                  to={`/self/orders?type=${index}`}
                  onClick={this.changeStatus}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          {/* <li className="active">
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
                </li>*/}

        </ul>
        <div className="order-container">
          {data.length === 0 ? (
            <div className="no-order">
              <div className="icon">
                <Icon type="file-text" />
              </div>
              <span>您还没有下订单</span>
              <a href="#">随便逛逛</a>
            </div>
          ) : (
            data.map((item, index) => {
              let {
                data,
                pic,
                desc,
                hot,
                moods,
                price,
                shopDesc,
                shop,
                name,
                oldPrice,
                size,
                color,
                id,
                num,
                state,
                time
              } = item;
              return (
                <div className="hasOrders" key={index}>
                  <div className="order">
                    <header className="header">
                      订单编号:{time + "" + price}
                      <span className="order-status">
                        {state === 1
                          ? "待付款"
                          : state === 2
                            ? "待发货"
                            : "待购买"}
                      </span>
                    </header>
                    <section className="order-goods">
                      <div className="order-good">
                        <div className="orderPic">
                          <img
                            src={pic instanceof Array ? pic[0] : pic}
                            alt={desc}
                          />
                        </div>
                        <div className="deps">
                          <p className="name">{name}}</p>
                          <p className="">
                            <span className="color">颜色:{color}}</span>
                            <span className="size">尺码:{size}</span>
                          </p>
                          <p className="wrap">
                            <span className="price">¥{price}}</span>
                            <span className="del-price">¥{oldPrice}}</span>
                          </p>
                        </div>
                      </div>
                    </section>
                    <footer className="footer">
                      共一件商品&nbsp;实付:{" "}
                      <span className="sum-cost">¥{price}}</span>
                    </footer>

                    {state!== 2 && state !== 3 ? (
                      <div className="order-opt">
                        <a
                          href="javascript:;"
                          onClick={async () => {
                            let res = await cancel({
                              time
                            });
                            if (res.code === 0) {
                              this.changeStatus();
                            }
                          }}
                        >
                          取消订单
                        </a>
                        <a
                          href="javascript:;"
                          onClick={async () => {
                            let res = await payOne({ time });
                            if (res.code === 0) {
                              this.changeStatus();
                            }
                          }}
                        >
                          立即付款
                        </a>
                      </div>
                    ) : (
                        <div className="order-opt">
                        <a
                          href="javascript:;"
                          onClick={async () => {
                            let res = await cancel({
                              time
                            });
                            if (res.code === 0) {
                              this.changeStatus();
                            }
                          }}
                        >
                          我要退货
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({ ...state.person }),
    { ...action.person, ...action.homeData }
  )(Orders)
);
