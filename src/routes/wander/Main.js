import React from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";
import action from "../../store/action";

class Main extends React.Component {
  async componentDidMount() {
    if (this.props.SHOW_IMG.length === 0) {
      await this.props.allData("SHOW_IMG");
    }
  }

  render() {
    let { SHOW_IMG } = this.props;
    if (SHOW_IMG.length === 0) return "";
    return (
      <div className="main">
        {SHOW_IMG.map((item, index) => {
          let { pic, title, desc, show, type } = item;
          return (
            <div key={index} className="blockBox">
              {title ? (
                <div className="big-title">
                  <h3>
                    {title} <a href="javascript:;">MORE&gt;</a>
                  </h3>
                </div>
              ) : (
                ""
              )}
              <div className="fz">
                {show === "banner" ? (
                  <div className="banner">
                    <Carousel autoplay>
                      {pic.map((item, index) => {
                        let { pic, id, desc } = item;
                        return (
                          <div key={index}>
                            <img src={pic} alt="" />
                            <p>{desc}</p>
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                ) : (
                  ""
                )}
                {show === "list" ? (
                  <div className="goodsList">
                    {pic.map((item, index) => {
                      let { pic, desc, title } = item;
                      return (
                        <div key={index} className="bigListBox">
                          <div className="imgBox">
                            {" "}
                            <img src={pic} alt="" />
                          </div>
                          <div className="psapnBox">
                            {" "}
                            <p>{desc}</p>
                            <span>{title}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}

                <img src={pic instanceof Array ? pic[0] : pic} alt="" />
                {type ? <p>{type}</p> : ""}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  state => state.wander,
  action.wander
)(Main);
