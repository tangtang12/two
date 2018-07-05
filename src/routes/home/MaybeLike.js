import React from "react";
import {connect} from "react-redux";
import {Icon} from "antd";
import {Link} from "react-router-dom";

class MaybeLike extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {
        let {maybeLike} = this.props.homeData;
        return <div className="maybeLikeBox">
            <h3 className="title">
                <Icon type="heart-o"/>
                <span>你可能喜欢</span>
            </h3>

            <ul className="goods-list">
                {maybeLike.map((item, index) => {
                    let {id} = item;
                    return <li className="goods-info" key={index}>
                        <Link to={`/details?id=${id}`}>
                            <div className="imgBox">
                                <div>
                                    <img src={item.pic} alt=""/>
                                </div>
                                <div className="similar"></div>
                            </div>
                            <div className="detail">
                                <p className="name">{item.desc}</p>
                                <p className="price">¥{item.price}
                                    <del>{item.oldPrice}</del>
                                </p>
                                <Icon className="similarIcon" type="ellipsis"></Icon>
                            </div>
                        </Link>
                    </li>;
                })}
            </ul>
        </div>;
    }
}

export default connect()(MaybeLike);

