import React from "react";
import { connect } from "react-redux";
import action from "../../store/action";

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (this.props.SWIPER_SLIDE.length === 0) {
      await this.props.allData("SWIPER_SLIDE");
    }
  }

  render() {
    if (this.props.SWIPER_SLIDE.length === 0) return "";
    return (
      <div className="tab">
        <ul className="certify">
          {this.props.SWIPER_SLIDE.map((item, index) => {
            let { pic, desc } = item;
            return (
              <li key={index}>
                <img src={pic} alt={desc} />
                <span>{desc}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => state.wander,
  action.wander
)(Slide);
