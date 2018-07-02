import React from "react";
import {connect} from "react-redux";

class BottomNav extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div>
            BottomNav
        </div>
    }
}

export default connect()(BottomNav);

