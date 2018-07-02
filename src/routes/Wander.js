import React from "react";
import {connect} from "react-redux";

class Wander extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div>
            Wander
        </div>
    }
}

export default connect()(Wander);

