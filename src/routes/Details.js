import React from "react";
import {connect} from "react-redux";
import {Carousel} from "antd";
import "../static/css/details.less";
import {Icon} from "antd";
import Qs from 'qs';
import queryCommodity from '../api/commodity';

class Details extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state={
            data:[],
            id:''
        }
    }

    async componentDidMount(){
        let str =this.props.location.search.slice(1),
        obj=Qs.parse(str);
        let res=await queryCommodity(obj.id);
        if (res.code===0){
            this.setState({
                id:obj.id,
                data:res.data
            })
        }

    }
    render() {
        console.log(this.state.data);
        let data=this.state.data;
       if (data.length===0)return "";
       let {pic,name,price,hot,shop,shopDesc} =data;
        return <section className="detailsBox">
            <div className="priceSwipe">
                <Carousel autoplay>
                    {pic.map((item,index)=>{
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
                <Icon type="down" />
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
                    <Icon type="shopping-cart" />
                    购物车
                </a>
                <a href="#" className="store">
                    <Icon type="shop" />
                    店铺
                </a>
                <a href="javascript:;" className="like">
                    <Icon type="heart" onClick={this.like}/>
                    收藏
                </a>
                <a href="#" className="addtoCart" >
                    加入购物车
                </a>
            </div>

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

}

export default connect()(Details);

