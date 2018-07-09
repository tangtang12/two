import React from "react";
import { Link } from "react-router-dom";
import '../static/css/Catalogue.less'

export default class Catalogue extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            display: false
        };
    }
    render() {
        let {id, pic, name, price, oldPrice } = this.props;
        return (
            <div className="step" >
                <Link to={`details?id=${id}`}>
                    <div className="imgBox">
                        <img src={pic[0]} alt="desc" />
                        {this.state.display ? (
                            <div className="displayBox">
                                <span className="likeBox">找相似</span>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <p>{name}</p>
                    <span className="price">¥{price}</span>
                    {oldPrice ? <span className="oldPrice">￥{oldPrice}</span> : ""}
                    <span
                        className="click"
                        onClick={ev => {
                            this.setState({ display: !this.state.display });
                            ev.preventDefault();
                        }}>
            ...
          </span>
                </Link>
            </div>
        );
    }
}