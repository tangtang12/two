import React from "react";
import {connect} from "react-redux";

class Cart extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div>
            Cart
        </div>
    }
}

export default connect()(Cart);

