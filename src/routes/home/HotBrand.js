import React from "react";
import {connect} from "react-redux";

class HotBrand extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {
            /*每一个li绑定数据*/
        return <div className="hotCategoryBox">

        <ul className="hotBrand clearfix">
            <h2 className="brand-title">热门品牌</h2>
            <li className="brand">
                <a href="#">
                    <div className="brand-logo">
                        <img
                            src="//img11.static.yhbimg.com/yhb-img01/2018/06/20/13/01896bda07452ee62d1744c8d014876dcc.jpg?imageView2/2/w/158/h/174/q/60" alt=""/>
                    </div>
                </a>
            </li>
            <li className="brand">
                <a href="#">
                    <div className="brand-logo">
                        <img
                            src="//img11.static.yhbimg.com/yhb-img01/2018/06/20/13/01896bda07452ee62d1744c8d014876dcc.jpg?imageView2/2/w/158/h/174/q/60" alt=""/>
                    </div>
                </a>
            </li>
            <li className="brand">
                <a href="#">
                    <div className="brand-logo">
                        <img
                            src="//img11.static.yhbimg.com/yhb-img01/2018/06/20/13/01896bda07452ee62d1744c8d014876dcc.jpg?imageView2/2/w/158/h/174/q/60" alt=""/>
                    </div>
                </a>
            </li>
            <li className="brand">
                <a href="#">
                    <div className="brand-logo">
                        <img
                            src="//img11.static.yhbimg.com/yhb-img01/2018/06/20/13/01896bda07452ee62d1744c8d014876dcc.jpg?imageView2/2/w/158/h/174/q/60" alt=""/>
                    </div>
                </a>
            </li>
            <li className="brand">
                <a href="#">
                    <div className="brand-logo">
                        <img
                            src="//img11.static.yhbimg.com/yhb-img01/2018/06/20/13/01896bda07452ee62d1744c8d014876dcc.jpg?imageView2/2/w/158/h/174/q/60" alt=""/>
                    </div>
                </a>
            </li>
            <li className="brand">
                <a href="#">
                    <div className="brand-logo">
                        <img
                            src="//img11.static.yhbimg.com/yhb-img01/2018/06/20/13/01896bda07452ee62d1744c8d014876dcc.jpg?imageView2/2/w/158/h/174/q/60" alt=""/>
                    </div>
                </a>
            </li>
            <li className="last">
                <a href="#">
                    <div className="brand-logo">
                        <img
                            src="//img10.static.yhbimg.com/yhb-img01/2016/09/06/14/0173088d664d59084d9dd61fa2d8b78908.png?imageView2/2/w/320/h/172/q/60" alt=""/>
                    </div>
                </a>
            </li>
        </ul>
            <div className="newPeople">
                <a href="#">
                    <img
                        src="//img11.static.yhbimg.com/yhb-img01/2018/05/22/15/01e7fb2dece0d8b1d40653fbb1b3776648.jpg?imageView2/3/w/640/h/200/q/60" alt="new people"/>
                </a>
            </div>
        </div>
    }
}

export default connect()(HotBrand);

