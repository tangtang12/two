import React from "react";
import {connect} from "react-redux";
import Topbox from './classify/Topbox'
import {Switch,Route,Redirect}  from 'react-router-dom'
import Men from './classify/Men';
import Women from './classify/Women';
import Kids from './classify/Kids';
import '../static/css/classify.less'

class Classify extends React.Component {
    constructor(props,context) {
        super(props,context);
    }
    render() {
        return <section className='classifyBox'>
            <Switch>
                <Route  path='/classify/men'  component={Men}/>
                <Route path='/classify/women' component={Women}/>
                <Route path='/classify/kids' component={Kids}/>
                <Redirect from='/classify' to='/classify/men'></Redirect>
            <Topbox/>
            </Switch>
        </section>
    }
}

export default connect()(Classify);
