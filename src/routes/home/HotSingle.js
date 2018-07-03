import React from "react";
import {connect} from "react-redux";
import {Icon} from "antd";

class HotSingle extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {

        return <div className="hotSingleBox">
            <div className="single-title">
                <h2>人气推荐</h2>
                <Icon type="ellipsis" />
            </div>
        </div>
    }
}

export default connect()(HotSingle);

