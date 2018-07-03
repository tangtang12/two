import React from "react";
import {connect} from "react-redux";

class Yoho extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div>
            Yoho
        </div>
    }
}

export default connect()(Yoho);

