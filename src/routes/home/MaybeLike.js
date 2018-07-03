import React from "react";
import {connect} from "react-redux";
import {Icon} from "antd";

class MaybeLike extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {
        let {maybeLike} = this.props.homeData;
        console.log(maybeLike);
        return <div className="maybeLikeBox">
            <h3 className="title">
                <Icon type="heart-o"/>
                <span>你可能喜欢</span>
            </h3>

            <ul className="goods-list">
                <li className="goods-info">
                    <div className="imgBox">
                        <a href="#">
                            <img src="//img13.static.yhbimg.com/goodsimg/2017/05/31/16/02ed02e5d304b5b0b3612c3b85be8b05c6.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60/format/webp" alt=""/>
                        </a>
                        <div className="similar"></div>
                    </div>
                    <div className="detail">
                        <p className="name">哈大武当晚饭爱我回复瓧 哇打我  </p>
                        <p className="price">挖的安慰法安慰法按位福娃发我发我 </p>
                        <Icon href="similarIcon"></Icon>
                    </div>
                </li>
            </ul>
        </div>
    }
}

export default connect()(MaybeLike);

