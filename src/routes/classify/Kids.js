import React from 'react';
import {connect} from 'react-redux'
import Topbox from './Topbox'
import  List from './kids/List'

class Men extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div>
            <Topbox/>
            <List/>
            <div></div>
        </div>

    }
}

export default connect()(Men)