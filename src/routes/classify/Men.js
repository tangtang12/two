import React from 'react';
import {connect} from 'react-redux'
import Topbox from './Topbox'
import {Link} from 'react-router-dom'
import List from './List'

class Men extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div>
            <Topbox/>
            <List type='manList'/>
        </div>

    }
}

export default connect()(Men)