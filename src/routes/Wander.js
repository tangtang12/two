import React from "react";
import {connect} from "react-redux";
import BottomNav from '../component/BottomNav';

class Wander extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div>
            <BottomNav/>
        </div>
    }
}

export default connect()(Wander);

