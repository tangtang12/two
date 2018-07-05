import React from "react";

export default class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 1
        }
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
                <input type="text"  className='txt' value={this.state.num} readOnly/>
                <input type="button" className="unplus" readOnly value='+' onClick={this.increase.bind(this)}/>

            </div>
        )
    }
}

