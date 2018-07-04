import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class Topbox extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div className='Topbox'>
            <ul className="clearfix">
                <li><NavLink to='/classify/men'>Men</NavLink></li>
                <span>|</span>
                <li><NavLink to='/classify/women'>Women</NavLink></li>
                <span>|</span>
                <li><NavLink to='/classify/kids'>Kids</NavLink></li>
            </ul>
        </div>
    }
}

export default connect()(Topbox)
