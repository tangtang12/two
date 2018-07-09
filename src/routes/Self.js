import React from "react";
import {connect} from "react-redux";
import '../static/css/self.less'
import {withRouter,  Switch, Route} from 'react-router-dom'
import action from "../store/action/index"
import Orders from "./self/Orders";
import MySelf from "./self/MySelf";
import BottomNav from "../component/BottomNav";

class Self extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className='fgg_Box'>
            <Switch>
                <Route path="/self" exact component={MySelf}/>
                <Route path="/self/orders" component={Orders}/>
            </Switch>
            <BottomNav></BottomNav>
        </div>;
    }

}

export default withRouter(connect(state => ({...state.person}), {...action.person, ...action.homeData})(Self));

