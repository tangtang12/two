import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Topbox extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div className='Topbox'>
            <ul className="clearfix">
                <li> <Link to='/classify/men'>Men</Link></li>
                <li> <Link to='/classify/women'>Women</Link></li>
                <li><Link to='/classify/kids'>Kids</Link></li>
            </ul>
        </div>
    }
}

export default connect()(Topbox)
