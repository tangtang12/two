import React from 'react';
import {connect} from 'react-redux'
import '../static/css/sort.less'
import Hearder  from  './sort/Header'

class Sort extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section className='sortBox'>
         <Hearder/>

        </section>
    }
}

export default connect()(Sort)