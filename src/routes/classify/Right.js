import React from 'react';
import {connect} from 'react-redux';

class Right extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let data=this.props.data;
        if (!data)return '';
        let attrAry=[];
        for (let attr in data) {
            attrAry.push(attr);
        }
        return <div className='imgBox'>
            {attrAry.map((item,index)=>{
             return   <div className="step clearfix" key={index}>
                    <h3>--{item}--</h3>
                    <div className="imgBox">
                        {data[item].map((item, index) => {
                        let {pic, desc} = item;
                        return <div className="smallBox" key={index}>
                                <img src={pic} alt=""/>
                                <p>{desc}</p>
                               </div>
                    })}
                    </div>
                </div>
            })}
        </div>
    }
}

export default connect()(Right);