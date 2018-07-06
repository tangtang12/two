import React, {
    Component
} from 'react';
import {
    Link,
    withRouter
} from "react-router-dom"
import {
    connect
} from "react-redux";
import action from "../../store/action";
import "./CartLogin.less"
import {
    Icon,
    Button
} from 'antd'
import Box from "../../component/Box";

import Pay from "../../component/Pay"

import {
    getCart,
    modify,
    selected
} from "../../api/car";

class Collapsed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num,
            isCheck: this.props.isCheck
        }
        console.log(this.props.isCheck);
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
        let {
            num,
            desc,
            name,
            price,
            id,
            size,
            color,
            isCheck
        } = this.props;
        return <a href="javascript:;">

            <div className="select-f" onClick={this.selectedOne.bind(this, {id, num, size, color})}>
                {this.state.isCheck ? <Icon type='check'/> : ''}
            </div>
            <div className='tip-shop-2'>x{
                this.state.num
            }</div>
            {this.props.collapsed ? <ul className="desc-shop-f">
                    <li className='tip-shop-1'>{name}</li>
                    <li className='tip-shop-3'>{desc}</li>
                    <li className='tip-shop-4'>￥{price}</li>
                </ul> :
                <div>
                <Box id={id} modify={this.modify} num={this.state.num} max={10} min={0} getNum={this.getNum||''} />
                <span href="javascript:;" className='colorSize'>颜色：{color}&nbsp;&nbsp;尺码:{size}</span>
                </div>}

                
        </a>
    }
    selectedOne = async (obj) => {
        let res = await selected(obj)
        if (res.code === 0) {
            this.setState({
                isCheck: res.isCheck
            })
            console.log(res);
        }
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
                console.log(item.isCheck);
                let {hot, pic = [], name, num, desc, price, id, size, color, isCheck} = item;

                return (<div key={index}>
                    <div className='tip-plus tip2'>
                        <Icon type="tag-o"/>
                        <span>{hot}</span>
                        <Link to='/classify'>去凑单 &gt; </Link>
                    </div>
                    <div className='shop_f'>
                        <div className="select-f" onClick={() => {
                            this.setState({
                                selected: !this.state.selected
                            });
                        }}>
                            <Icon type={this.state.selected ? "check" : ""}/>
                        </div>
                        <img src={pic[0]}/>
                        <Collapsed num={num} name={name} desc={desc} price={price} id={id}
                                   collapsed={this.props.collapsed} size={size} color={color} isCheck={isCheck} />
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
                   <Pay text="结算"/>
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



}

export default withRouter(connect(...state => state.cart, action.cart)(CartLogin));