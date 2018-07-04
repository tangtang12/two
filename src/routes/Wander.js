import React from "react";
import {connect} from "react-redux";
import BottomNav from '../component/BottomNav';
import Top from './wander/Top';
import Slide from './wander/SLIDE';
import Tab from './wander/Tab';
import Main from './wander/Main';
import '../static/css/wander.less';

class Wander extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {

        return <section className='wanderBox'>
            <Top/>
            <Slide/>
            <Tab/>
            <Main/>
            <BottomNav/>
        </section>
    }
}

export default connect()(Wander);

