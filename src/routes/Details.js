import React from "react";
import {connect} from "react-redux";
import {Carousel, Modal, Button, Radio,Icon} from "antd";
import "../static/css/details.less";
import Qs from 'qs';
import queryCommodity from '../api/commodity';
import Top from './wander/Top'
import Box from '../component/Box';
import {addCar}  from '../api/car';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class Details extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            id: '',
            visible: false,
            car:false
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
        let {pic, name, price, hot, shop, shopDesc} = data;
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
                <a href="#" className="myCart">
                    <Icon type="shopping-cart"/>
                    购物车
                </a>
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

            {this.state.car?<div className='shopping'>
                <div className='shopTop'>
                    <div className='shopImg'>
                        <img src={pic[0]} alt=""/>
                    </div>
                    <div className='shopFz'>
                        <p>￥{price.toFixed(2)}</p>
                        <p>请选择颜色、尺码</p>
                    </div>
                    <a href='javascript:;' className='click'>x</a>
                </div>
                <div className='title'>
                    <div className='small'><span className='name'>颜色</span><RadioGroup defaultValue="a">
                        <RadioButton value="a">白色</RadioButton>
                        <RadioButton value="b">黑色</RadioButton>
                        <RadioButton value="c">灰色</RadioButton>
                    </RadioGroup></div>
                    <div className='small'><span className='name'>尺码</span>
                        <RadioGroup defaultValue="a">
                            <RadioButton value="a">X</RadioButton>
                            <RadioButton value="b">XLL</RadioButton>
                            <RadioButton value="c">XLLL</RadioButton>
                        </RadioGroup></div>
                    <div className='small'><span className='name'>数量</span>
                        <Box min='0' max='100' />
                    </div>
                </div>
                <div className='bottom'>
                    <a href="javascript:;">立即购买</a>
                    <a href="javascript:;" onClick={this.addToCar}>加入购物车</a>
                </div>
            </div>:""}

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

    showModal = () => {
        if (!this.props.isLogin) {
            this.setState({
                visible: true,
            });
            return;
        }
        this.setState({
            car:true
        })

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

     addToCar=async ev=>{
       let a =await addCar(2);
         console.log(a);
     }

}

export default connect(state => ({...state.person}))(Details);

