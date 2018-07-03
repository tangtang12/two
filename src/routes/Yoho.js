import React from "react";
import {connect} from "react-redux";
import BottomNav from '../component/BottomNav';

class Yoho extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div>
            <BottomNav/>
        </div>
    }
}

export default connect()(Yoho);

