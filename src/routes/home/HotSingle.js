import React from "react";
import {connect} from "react-redux";
import {Icon} from "antd";
import {Link} from "react-router-dom";

class HotSingle extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {
        let {hotSingleGoods} = this.props.homeData;
        return <div className="hotSingleBox">
            <div className="single-title">
                <h2>人气推荐</h2>
                <Icon type="ellipsis"/>
            </div>
            <div className="singleTop">
                <a href="#">
                    <div className="imgBox">
                        <img
                            src="//img11.static.yhbimg.com/yhb-img01/2017/08/04/10/015f31dc40baa31dee9f602f1a84a6ae5f.jpg?imageView2/2/w/640/h/200/q/90"
                            alt="top100"/>
                    </div>
                </a>
            </div>
            <div className="singleList">
                <ul style={{
                    width: hotSingleGoods.length * 2.5 + "rem"
                }}>
                    {hotSingleGoods.map((item, index) => {
                        let id = item.id;
                        return <li key={index}>
                            <Link href="#" to={`/details?id=${id}`}>
                                <img src={item.pic} alt={item.desc}/>
                                <div className="goods-info">
                                    <h3 className="price">¥{item.price}</h3>
                                    <p className="view-num">{item.view}</p>
                                    <p className="view-status">{item.state}</p>
                                </div>
                            </Link>
                        </li>;
                    })}

                </ul>
            </div>

        </div>;
    }
}

export default connect()(HotSingle);

