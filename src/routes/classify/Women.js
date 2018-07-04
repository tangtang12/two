import React from 'react';
import {connect} from 'react-redux'
import Topbox from './Topbox'
import List from './women/List'

class Women extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div>
            <Topbox/>
            <List/>
           <ul>
               <li></li>
           </ul>
        </div>
    }
}

export default connect()(Women)