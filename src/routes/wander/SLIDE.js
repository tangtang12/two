import React from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";
import action from "../../store/action";

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    //let res = await queryData("SLIDE");
    if (this.props.SLIDE.length === 0) {
      await this.props.allData("SLIDE");
    }
  }

  render() {
    let { SLIDE } = this.props;
    if (SLIDE.length === 0) return "";
    return (
      <div className="wanderSlide">
        <Carousel>
          {SLIDE.map((item, index) => {
            let { pic, desc } = item;
            return (
              <div key={index}>
                <img src={pic} alt={desc} />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default connect(
  state => state.wander,
  action.wander
)(Slide);
