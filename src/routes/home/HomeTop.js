import React from "react";
import {connect} from "react-redux";

class HomeTop extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div className="homeTopBox">
            <div className="homeSwipeOne"></div>

            <div className="toClassify">
                <ul className="clearfix">
                    <li>
                        <div className="ico"></div>
                        <span>新品着装</span>
                    </li>
                    <li>
                        <div className="ico"></div>
                        <span>人气搭配</span>
                    </li>
                    <li>
                        <div className="ico"></div>
                        <span>折扣专区</span>
                    </li>
                    <li>
                        <div className="ico"></div>
                        <span>全部分类</span>
                    </li>
                </ul>
            </div>

            <div className="off50">
                <a href="#">
                    <img src="//img10.static.yhbimg.com/yhb-img01/2018/06/27/15/01d3b473fb61b8396b93f4065e02185d9d.jpg?imageView2/3/w/640/h/200/q/60" alt="off50"/>
                </a>
            </div>

            <div className="Crevice"></div>

            <div className="off50">
                <a href="#">
                    <img src="//img11.static.yhbimg.com/yhb-img01/2018/06/27/15/011d1adf46e89e79bdbd2dfd53ab17bf34.jpg?imageView2/3/w/640/h/200/q/60" alt="off50"/>
                </a>
            </div>
        </div>
    }
}

export default connect()(HomeTop);

