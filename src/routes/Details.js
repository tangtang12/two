import React from "react";
import {connect} from "react-redux";
import {Carousel, Modal, Button,  Icon, message} from "antd";
import "../static/css/details.less";
import Qs from 'qs';
import queryCommodity from '../api/commodity';
import Top from './wander/Top'
import Box from '../component/Box';
import CarTap from '../component/CarTap';
import {addCar} from '../api/car';
import action from '../store/action/index'
import {isLogin} from '../api/person'
import {Link} from "react-router-dom";


class Details extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            id: '',
            visible: false,
            car: false,
            color: null,
            size:null
        };
    }

    async componentWillMount() {
        let res = await isLogin();
        if (res.code === 0) {
            this.props.isLogin(0);
        }
    }

    async componentDidMount() {
        let str = this.props.location.search.slice(1),
            obj = Qs.parse(str);
        let res = await queryCommodity(obj.id);
        if (res.code === 0) {
            this.setState({
                id: obj.id,
                data: res.data
            })
        }
    }

    render() {
        let data = this.state.data;
        if (data.length === 0) return "";
        let {pic, name, price, hot, shop, shopDesc, id} = data;
        return <section className="detailsBox">
            <Top/>
            <div className="priceSwipe">
                <Carousel autoplay>
                    {pic.map((item, index) => {
                        return <div className={"imgBox"} key={index}><img src={item} alt=""/></div>
                    })}
                </Carousel>
            </div>
            <div className="goods-name">
                <h1 className="name">{name}</h1>
            </div>
            <div className="goods-price">
                <h2 className="price">¥{price}</h2>
            </div>

            <div className="goods-discount">
                <h2 className="first-item">
                    <span>促</span>
                    {hot}
                </h2>
                <Icon type="down"/>
            </div>

            <div className="evaluate">
                <div className="title clearfix">
                    <p className="eveTitle">商品评价(<span className="eve-num">0</span>)</p>
                    <p className="buyTitle">购买咨询(<span className="buy-num">1</span>)</p>
                </div>
                <div className="content">
                    <div className="consult">
                        <div className="question">
                            <span className="q">Q</span>
                            <p>
                                体重300，身高300传什么号
                                <br/>
                                <span className="time">2017-11-10 16:08:28</span>
                            </p>
                        </div>
                        <div className="answer">
                            <span className="a">A</span>
                            <p>
                                向您推荐S号供参考,由于版型和个人穿衣风格不同，建议您参照此款商品“尺码信息”。
                            </p>
                        </div>
                    </div>
                </div>
                <a href="#" className="more">查看更多 <Icon type="right"/></a>
            </div>

            <div className="enter-store">
                <a href="#" className="store-logo"><img
                    src={shop} alt=""/></a>
                <a href="#" className="store-name">{shopDesc}</a>
                <a href="#" className="store-link">进入店铺<Icon type="right"/></a>
            </div>

            <div className="cart-bar">
                <Link to={"/cart"} href="#" className="myCart">
                    <Icon type="shopping-cart"/>
                    购物车
                </Link>
                <a href="#" className="store">
                    <Icon type="shop"/>
                    店铺
                </a>
                <a href="javascript:;" className="like">
                    <Icon type="heart" onClick={this.like}/>    
                    收藏
                </a>
                {/*<a href="javascript:;" className="addtoCart" onClick={this.click} >*/}
                {/*加入购物车*/}
                {/*</a>*/}
                <Button type="" onClick={this.showModal} className='addtoCart'>加入购物车</Button>
                <Modal
                    title="登录提示"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>是否前去登录</p>
                </Modal>
            </div>

            {this.state.car ?<CarTap data={{pic:pic[0],price,id,type:true,open:this.open}} /> : ""}

        </section>
    }

    like = ev => {
        let color = ev.target.style.color;
        if (color !== "red") {
            ev.target.style.color = "red";
            return;
        }
        ev.target.style.color = "#000";
    };

    showModal =async () => {
        let res = await isLogin();
        if (res.code!==0) {
            this.setState({
                visible: true,
            });
            return;
        }
        this.setState({
            car: true
        });
        document.documentElement.style.overflow = 'hidden';
    };

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        this.props.history.push('/login');
    };

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    open=ev=>{
        this.setState({
            car: false
        });
    }

}

export default connect(state => ({...state.person}), action.person)(Details);

