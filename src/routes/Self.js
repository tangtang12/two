import React from "react";
import {connect} from "react-redux";

class Self extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div>
            Self
        </div>
    }
}

export default connect()(Self);

