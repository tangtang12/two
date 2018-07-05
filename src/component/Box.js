import React from "react";
import {getCart} from "../api/car";
import action from "../store/action/index";
import {connect} from "react-redux";

 class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };

    }

     async componentWillMount(){
        let numData=await getCart(getCart);
         this.setState({
             num:numData.data[0].num
         });

     }


    increase() {
        this.setState({
            num: (this.state.num == this.props.max) ? this.props.max : (this.state.num + 1)
        });

    }

    decrease() {
        this.setState({
            num: (this.state.num == this.props.min) ? this.props.min : (this.state.num - 1)
        });

    }

    /*渲染组件*/
    render() {
        return (
            <div className='num'>
                <input type="button" className="plus" readOnly value='-' onClick={this.decrease.bind(this)}/>
                <input type="text"  id='num' className='txt' value={this.state.num}  readOnly/>
                <input type="button" className="unplus" readOnly value='+' onClick={this.increase.bind(this)}/>
            </div>
        )
    }
}
export default connect(...state=>state.cart,action.cart)(Box)