import React from 'react';
import {connect} from 'react-redux'

class List extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div className='menBox'>
            <ul>
                <li>上衣</li>
                <li>裤装</li>
                <li>鞋靴</li>
                <li>包类</li>
                <li>服配</li>
                <li>数码3C</li>
                <li>玩具礼品</li>
                <li>美妆/个护</li>
                <li>内衣/家居服</li>
                <li>运动装备</li>
                <li>成人用品</li>
                <li>居家生活</li>
                <li>厨具餐具</li>
                <li>文具杂志</li>
                <li>生活电器</li>
            </ul>
            <div>
                <ul><span>—热门推荐—</span>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <span>——全部商品—</span>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <span>热门品牌</span>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                </ul>
            </div>
        </div>
    }
}

export default connect()(List)