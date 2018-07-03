import React from "react";
import {connect} from "react-redux";

class HotCategory extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div className="hotCateGoryBox">
            <div className="hot-category">
                <h2 className="hot-title">热门品类</h2>
                {/*后期修改绑定数据*/}
                <ul className="category-list clearfix">
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="img-box">
                                <img
                                    src="//img11.static.yhbimg.com/yhb-img01/2018/06/18/11/0181af28ec52333aed891c8124656c16bf.jpg?imageView2/2/w/140/h/140/q/60" alt=""/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="hot-swipe"></div>

        </div>
    }
}

export default connect()(HotCategory);

