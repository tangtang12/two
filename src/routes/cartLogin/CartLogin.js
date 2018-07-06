import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom"
import {connect} from "react-redux";
import action from "../../store/action";
import "./CartLogin.less"
import {
    Icon,
    Button
} from 'antd'
import Box from "../../component/Box";
import {
    getCart, modify
} from "../../api/car";

class Collapsed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num
        }
    }

    //修改商品数量
    modify = async obj => {
        let res = await modify(obj);
    };

    getNum = (num) => {
        this.setState({
            num
        })
    };

    render() {
        let {num, desc, name, price, id} = this.props;
        return <a href="javascript:;">
            <div className='tip-shop-2'>x{
                this.state.num
            }</div>
            {this.props.collapsed ? <ul className="desc-shop-f">
                    <li className='tip-shop-1'>{name}</li>
                    <li className='tip-shop-3'>{desc}</li>
                    <li className='tip-shop-4'>￥{price}</li>
                </ul> :
                <div><Box id={id} modify={this.modify} num={num} max={10} min={0} getNum={this.getNum}/>
                </div>}
        </a>
    }
}


class CartLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            selectedTwo: [],
            getInfo: [],

        };
    }

    async componentWillMount() {
        let getInfo = await getCart();
        if (getInfo.code === 0) {
            this.setState({
                getInfo: getInfo.data
            })
        }

    }

    render() {
        return (<div className='cartLogin-f'>
            {/*减运费*/}
            <div className='tip-plus'>
                <span>再买￥<p>555</p>即可免运费</span>
                <Link to='/classify'>去凑单 &gt; </Link>
            </div>

            {/*商品信息和价格*/}

            {this.state.getInfo.length === 0 ? "" : this.state.getInfo.map((item, index) => {
                let {hot, pic = [], name, num, desc, price, id} = item;

                return (<div key={index}>
                    <div className='tip-plus tip2'>

                        <Icon type="tag-o"/>
                        <span>{hot}</span>
                        <Link to='/classify'>去凑单 &gt; </Link>
                    </div>
                    <div className='shop_f'>
                        <div className="select-f" onClick={this.selectedOne}>
                            {this.state.selected || this.state.selectedTwo ? <Icon type='check'/> : ''}
                        </div>

                        <img src={pic[0]}/>

                        <Collapsed num={num} name={name} desc={desc} price={price} id={id}
                                   collapsed={this.props.collapsed}/>
                    </div>
                </div>)
            })}

            {this.props.collapsed ?
                <div>
                    <div className='message-f'>
                        <Icon type="pay-circle-o"/>
                        <span>全场加价购</span>
                        <a href="#">去换购 <p style={{color: "#bfbfbf"}}>&gt;</p></a>

                    </div>
                    <div className='price-all' style={{
                        marginBottom: '.2rem',
                        height: ".9rem",
                        lineHeight: ".9rem",
                        background: "#fff"
                    }}>
                <span style={{margin: ".2rem", fontSize: ".3rem"}}>
                总计
                </span>
                    </div>
                </div> : ""}


            {/*底部*/}

            {this.props.collapsed ? <div className="login-all" style={{zIndex: "99999"}}>
                <div>
                    <a href="javascript:;" style={{
                        color: '#000',
                        border: '.02rem solid',
                        width: '.4rem',
                        height: '.4rem',
                        position: 'absolute',
                        top: '.2rem',
                        left: '.2rem',
                        borderRadius: '50%'

                    }} onClick={this.selectedAll}>

                        {this.state.selected ? <Icon type='check'/> : ''}

                    </a>
                    <p>全选</p>
                    <span className='span-f'>总计：￥sss.00（n件）</span>
                    <p style={{
                        left: '4rem',
                        fontSize: '.27rem',
                        color: '#999',
                        paddingLeft: ".1rem"
                    }}>不含运费</p>
                    <Button>结算</Button>
                </div>
            </div> : <div className="login-all" style={{zIndex: "99999"}}>
                <div>
                    <a href="javascript:;" style={{
                        color: '#000',
                        border: '.02rem solid',
                        width: '.4rem',
                        height: '.4rem',
                        position: 'absolute',
                        top: '.2rem',
                        left: '.2rem',
                        borderRadius: '50%'
                    }} onClick={this.selectedAll}>
                        {this.state.selected ? <Icon type='check'/> : ''}

                    </a>
                    <p>全选</p>
                    <Button style={{
                        background: "#555",
                        right: "2.4rem"
                    }}>移入
                        <br/>
                        收藏夹</Button>
                    <Button>删除</Button>
                </div>
            </div>


            }


        </div>)
    }

    selectedAll = ev => {
        console.log(ev.target.tagName);

        if (ev.target.tagName === 'A' || "I") {
            this.setState({
                selected: !this.state.selected
            });
        }
    };


    selectedOne = ev => {

        if (ev.target.tagName === "DIV" || "I") {
            this.setState({
                selectedTwo: !this.state.selectedTwo
            });

        }


    };


}

export default withRouter(connect(...state => state.cart, action.cart)(CartLogin));