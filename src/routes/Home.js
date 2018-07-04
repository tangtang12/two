import React from "react";
import {connect} from "react-redux";
import "../static/css/home.less";
import {Switch, Route} from "react-router-dom";
import HomeTop from "./home/HomeTop";
import HotCategory from "./home/HotCategory";
import HotBrand from "./home/HotBrand";
import HotSingle from "./home/HotSingle";
import action from "../store/action";
import MaybeLike from "./home/MaybeLike";
import HomeFooter from "./home/HomeFooter";
import {Icon} from "antd";


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            left: "left",
            right: "right on",
            mark: "mark"
        };
    }

    async componentDidMount() {
        if (this.props.homeData.n < 8) {
            this.props.queryData();
        }
    }


    render() {
        let {homeData} = this.props;
        if (homeData.n < 8) return "";
        let {left, right, mark} = this.state;

        return <section className="homeBox">
            <div className={right} ref="right">
                <div className="homeLogoBox">
                    <Icon type="menu-unfold" onClick={this.leftOn}/>
                    <span className="logo">Yoho!Buy</span>
                    <a href="#"><Icon type="search"/></a>
                </div>
                <HomeTop homeData={homeData}/>
                <HotCategory homeData={homeData}/>
                <HotBrand homeData={homeData}/>
                <HotSingle homeData={homeData}/>
                <MaybeLike homeData={homeData}/>
                <HomeFooter/>
                <div className={mark} onClick={this.rightOff} ref="mask"></div>
            </div>
            <div className={left}>
                <ul className="first">
                    <li>
                        <a href="#">
                            <span className="nav-img"></span>
                            <em>男生</em>
                            <span className="title">GIRLS</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="nav-img" style={{
                                backgroundImage: "url('//img11.static.yhbimg.com/yhb-img01/2015/09/28/10/01399a2fd752e0d334f57be11d4dbf41c5.png')"
                            }}></span>
                            <em>女生</em>
                            <span className="title">boys</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="nav-img" style={{
                                backgroundImage: "url('//img11.static.yhbimg.com/yhb-img01/2015/10/19/07/01263e3f813116cc9b61010b8ca580c742.png')"
                            }}></span>
                            <em>童装</em>
                            <span className="title">KIDS</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="nav-img" style={{
                                backgroundImage: "url('//img12.static.yhbimg.com/yhb-img01/2015/10/19/07/026df1f974add11e823d1912d920176b6c.png')"
                            }}></span>
                            <em>创意生活</em>
                            <span className="title">LIFE STYLE</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    }

    rightOff = ev => {
        this.setState({
            left: "left",
            right: "right on",
            mark: "mark"
        });
    };

    leftOn = ev => {
        let right = this.state.right.replace("on", "off");
        this.setState({
            left: this.state.left + " on",
            right,
            mark: this.state.mark + " dis"
        });
    };
}

export default connect(state => state.home, action.home)(Home);

