import React from "react";
import {connect} from "react-redux";
import {query} from "../../api/home";
import action from "../../store/action";
import {Carousel} from "antd";
import {Link} from "react-router-dom";

class HomeTop extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        let {slide,iconsList} = this.props.homeData;
        return <div className="homeTopBox">
            <div className="homeSwipeOne">
                <Carousel autoplay>
                    {slide.map((item, index) => {
                        return   <div key={index}><Link to={"/sort"}><img src={item.pic} alt={item.desc}/></Link></div>
                    })}
                </Carousel>
            </div>

            <div className="toClassify">
                <ul className="clearfix">
                    {iconsList.map((item, index) => {
                        return <li key={index}>
                        <Link to={index === iconsList.length-1?"/classify":"/sort"}>
                            <div className="ico"><img src={item.pic} alt=""/></div>
                            <span>{item.desc}</span>
                            </Link>
                        </li>
                    })}

                </ul>
            </div>

            <div className="off50">
                <Link href="#" to={"/sort"}>
                    <img
                        src="//img10.static.yhbimg.com/yhb-img01/2018/06/27/15/01d3b473fb61b8396b93f4065e02185d9d.jpg?imageView2/3/w/640/h/200/q/60"
                        alt="off50"/>
                </Link>
            </div>

            <div className="Crevice"></div>

            <div className="off50">
                <Link href="#" to={"/sort"}>
                    <img
                        src="//img11.static.yhbimg.com/yhb-img01/2018/06/27/15/011d1adf46e89e79bdbd2dfd53ab17bf34.jpg?imageView2/3/w/640/h/200/q/60"
                        alt="off50"/>
                </Link>
            </div>
        </div>;
    }
}

export default connect(state => state.home, action.home)(HomeTop);

