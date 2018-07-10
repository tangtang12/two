import React from "react";
import { connect } from "react-redux";
import { queryMenList } from "../../api/classify";
import Right from "./Right";
import action from "../../store/action";
class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      keys: [],
      index: 0,
      data: null,
      i: 0,
      m: 0,
      k: 1
    };
  }

  async componentDidMount() {
    if (this.props[this.props.type].length === 0) {
      await this.props.getData(this.props.type);
    }

    let keys = [];
    for (let key in this.props[this.props.type]) {
      keys.push(key);
    }
    this.setState({
      keys,
      data: this.props[this.props.type]
    });
  }

  render() {
    let keys = this.state.keys;
    if (keys.length === 0) return "";
    return (
      <div className="menListBox">
        <ul>
          {keys.map((item, index) => {
            return (
              <li
                key={index}
                className={this.state.index === index ? "active" : ""}
              >
                <a
                  onClick={() => {
                    this.setState({
                      index
                    });
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="right">
          <Right data={this.fn(this.state.index)} />
        </div>
      </div>
    );
  }

  fn = index => {
    return this.state.data[this.state.keys[index]];
  };
}

export default connect(
  state => state.classify,
  action.classify
)(List);
