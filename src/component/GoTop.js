import React from "react";
import {BackTop } from "antd";

export default class GoTop extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return <div className="goTopBox">
            <BackTop/>
        </div>
    }
}
