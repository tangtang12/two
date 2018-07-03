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


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    async componentDidMount() {
        if (this.props.homeData.n<8) {
            this.props.queryData();
        }
    }



    render() {
        let {homeData} = this.props;
        if (homeData.n<7) return "";
        return <section className="homeBox">
            <HomeTop homeData={homeData}/>
            <HotCategory homeData={homeData}/>
            <HotBrand homeData={homeData}/>
            <HotSingle homeData={homeData}/>
            <MaybeLike homeData={homeData}/>
        </section>
    }
}

export default connect(state=>state.home,action.home)(Home);

