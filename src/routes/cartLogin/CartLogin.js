import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom"
import "./CartLogin.less"
import {Icon, Button} from 'antd'



class CartLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            collapsed: this.props.collapsed
        };
    }

    componentWillReceiveProps() {
        this.setState({
            collapsed: this.props.collapsed
        })

    }


    render() {
        let a = 'check';
        return (<div className='cartLogin-f'>
            {/*减运费*/}
            <div className='tip-plus'>
                <span>再买￥<p>555</p>即可免运费</span>
                <Link to='/classify'>去凑单 &gt; </Link>
            </div>
            {/*摆设*/}
            <div className='tip-plus tip2'>

                <Icon type="tag-o"/>
                <span>再购￥<p>555</p>立享满减</span>
                <Link to='/classify'>去凑单 &gt; </Link>
            </div>
            {/*商品信息和价格*/}
            <div className='shop_f'>
                <div className="select-f" onClick={() => {
                    this.setState({
                        selected: !this.state.selected
                    });
                    let a = this.state.selected ? "check" : ""

                    console.log(a);
                }}>
                    <Icon type={a}/>
                </div>

                <img
                    src="//img12.static.yhbimg.com/goodsimg/2018/05/22/10/0208ee25c776f2d557d9a360fd059becfd.jpg?imageMogr2/thumbnail/120x160/background/d2hpdGU=/position/center/quality/60/format/webp"
                    alt=""/>
                <Link to='/self'>

                    {this.state.collapsed ? <ul className="desc-shop-f">
                        <li className='tip-shop-1'>title</li>
                        <li className='tip-shop-2'>x3</li>
                        <li className='tip-shop-3'>desc</li>
                        <li className='tip-shop-4'>￥123</li>
                    </ul> : <ul className="desc-shop-f">
                        <li className='tip-shop-1'>title</li>
                        <li className='tip-shop-2'>x3</li>
                        <li className='tip-shop-3'>desc</li>
                        <li className='tip-shop-4'>￥123</li>
                    </ul>}


                </Link>
            </div>


            {this.state.collapsed ?
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

            {this.state.collapsed ? <div className="login-all">
                <div>
                    <a href="javascript:;" style={{
                        color: '#fff',
                        background: "#444",
                        borderRadius: "50%"

                    }}><Icon type='check'/></a>
                    <p>全选</p>
                    <span className='span-f'>总计：￥sss.00（n件）</span>
                    <p style={{
                        left: '4rem',
                        fontSize: '.27rem',
                        color: '#999'
                    }}>不含运费</p>
                    <Button>结算</Button>
                </div>
            </div> : <div className="login-all">
                <div>
                    <a href="javascript:;" style={{
                        color: '#fff',
                        background: "#444",
                        borderRadius: "50%"

                    }}><Icon type='check'/></a>
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

            {/*编辑*/}

            {/*完成*/}

        </div>)
    }
}

export default withRouter(CartLogin)