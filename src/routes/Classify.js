import React from "react";
import {connect} from "react-redux";
import Topbox from './classify/Topbox'
import {Switch,Route,Redirect}  from 'react-router-dom'
import '../static/css/classify.less'
import Men from "./classify/Men";
import Women from "./classify/Women";
import Kids from "./classify/Kids";

class Classify extends React.Component {
    constructor(props,context) {
        super(props,context);
    }
    render() {
        return <section className='classifyBox'>
            <Switch>
                <Route exact path='/classify/men' exact component={Men}/>
                <Route path='/classify/women' component={Women}/>
                <Route path='/classify/kids' component={Kids}/>
            <Topbox></Topbox>
            </Switch>
        </section>
    }
}

export default connect()(Classify);

