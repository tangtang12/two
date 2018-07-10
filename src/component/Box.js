import React from "react";
import { getCart } from "../api/car";
import action from "../store/action/index";
import { connect } from "react-redux";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num ? this.props.num : 1
    };
  }

  async increase() {
   await this.setState({
      num:
        this.state.num == this.props.max ? this.props.max : this.state.num + 1
    });
    this.props.setNum({
        shopId:this.props.id,
        num:this.state.num,
        time:this.props.time
    })

  }
  componentDidUpdate() {
    if (this.num === this.state.num) return;
    this.num = this.state.num;
    this.props.modify
      ? this.props.modify({
          id: this.props.id,
          num: this.state.num,
          time: this.props.time
        })
      : "";
    this.props.getNum(this.num);
  }
  async decrease () {
    this.setState({
      num:
        this.state.num == this.props.min ? this.props.min : this.state.num - 1
    });
    await this.props.setNum({
        shopId:this.props.id,
        num:this.state.num,
        time:this.props.time
    })
      console.log(this.state.num);
      this.props.setNum({
          shopId:this.props.id,
          num:this.state.num,
          time:this.props.time
      })
  }
  /*渲染组件*/
  render() {
      return (
      <div className="num">
        <input
          type="button"
          className="plus"
          readOnly
          value="-"
          onClick={this.decrease.bind(this)}
        />

        <input
          type="text"
          className="txt numBox"
          value={this.state.num}
          readOnly
        />

        <input
          type="button"
          className="unplus"
          readOnly
          value="+"
          onClick={this.increase.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  state => state.cart,
  action.cart
)(Box);
