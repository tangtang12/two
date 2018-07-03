import React from 'react';
import {connect} from 'react-redux'
import Topbox from './Topbox'

class Women extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div>
            <Topbox/>
           <ul>
               <li></li>
           </ul>
        </div>
    }
}

export default connect()(Women)