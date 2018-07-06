import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
 
class HotBrand extends React.Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {
            /*每一个li绑定数据*/
        let {hotBrands} = this.props.homeData;
        let lastPic = hotBrands[hotBrands.length - 1].pic;
        let lastDesc = hotBrands[hotBrands.length - 1].Desc;
        return <div className="hotCategoryBox">

            <ul className="hotBrand clearfix">
                <h2 className="brand-title">热门品牌</h2>
                {hotBrands.map((item, index) => {
                    if (index === hotBrands.length-1) return;
                    return  <li className="brand" key={index}>
                        <Link href="#" to={"/sort"}>
                            <div className="brand-logo">
                                <img src={item.pic} alt={item.desc}/>
                            </div>
                        </Link>
                    </li>
                })}
                <li className="last" >
                    <Link href="#" to={"/sort"}>
                        <div className="brand-logo">
                            <img src={lastPic} alt={lastDesc}/>
                        </div>
                    </Link>
                </li>
            </ul>
            <div className="newPeople">
                <Link href="#" to={"/sort"}>
                    <img
                        src="//img11.static.yhbimg.com/yhb-img01/2018/05/22/15/01e7fb2dece0d8b1d40653fbb1b3776648.jpg?imageView2/3/w/640/h/200/q/60"
                        alt="new people"/>
                </Link>
            </div>
        </div>;
    }
}

export default connect()(HotBrand);

