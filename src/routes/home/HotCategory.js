import React from "react";
import {connect} from "react-redux";
import {Carousel} from "antd";

class HotCategory extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {
        let {hotCategory,bannerSlide} = this.props.homeData;
        return <div className="hotCateGoryBox">
            <div className="hot-category">
                <h2 className="hot-title">热门品类</h2>
                {/*后期修改绑定数据*/}
                <ul className="category-list clearfix">
                    {hotCategory.map((item, index) => {

                        return <li key={index}>
                            <a href="#">
                                <div className="img-box">
                                    <img
                                        src={item.pic} alt={item.desc}/>
                                </div>
                            </a>
                        </li>
                    })}
                </ul>
            </div>

            <div className="hot-swipe">
                <Carousel autoplay>
                    {bannerSlide.map((item, index) => {
                        return <div key={index}>
                            <img src={item.pic} alt={item.desc}/>
                        </div>
                    })}
                </Carousel>
            </div>

        </div>;
    }
}

export default connect()(HotCategory);

