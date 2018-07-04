import React from 'react';
import {connect} from 'react-redux';



class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideData: []
        }
    }

    render() {
       return <div className='tab'>

       </div>
    }
}

export default connect()(Slide);