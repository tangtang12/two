import React from "react";
import {connect} from "react-redux";
import "../static/css/home.less";
import {Switch, Route} from "react-router-dom";
import HomeTop from "./home/HomeTop";
import HotCategory from "./home/HotCategory";
import HotBrand from "./home/HotBrand";
import HotSingle from "./home/HotSingle";


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return <section className="homeBox">

            <HomeTop/>
            <HotCategory/>
            <HotBrand/>
            <HotSingle/>
        </section>
    }
}

export default connect()(Home);

