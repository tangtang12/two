import React from "react";
import {connect} from "react-redux";
import BottomNav from '../component/BottomNav';
import Top from './wander/Top';
import '../static/css/wander.less';
class Wander extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <section className='wanderBox'>
            <Top/>
            <BottomNav/>
        </section>
    }
}

export default connect()(Wander);

