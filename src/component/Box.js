import React from "react";

export default class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num?this.props.num:1
        }
    }

    increase() {
        this.setState({
            num: (this.state.num == this.props.max) ? this.props.max : (this.state.num + 1)
        });
    }

    componentDidUpdate(){
        if (this.num===this.state.num) return;
        this.num=this.state.num;
        this.props.modify?this.props.modify({id:this.props.id,num:this.state.num}):"";
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
        <input type="text"  className='txt numBox' value={this.state.num}   readOnly/>
                <input type="button" className="unplus" readOnly value='+' onClick={this.increase.bind(this)}/>

            </div>
        )
    }
}