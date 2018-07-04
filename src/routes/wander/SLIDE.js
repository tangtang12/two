import React from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';
import queryData from "../../api/wander";


class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideData: []
        }
    }

    async componentDidMount() {
        let res = await  queryData('SLIDE');
        if (res.code===0){
            let {data}=res;
            this.setState({
                slideData:data
            })
        }
    }

    render() {
        let {slideData} =this.state;
        if (slideData.length===0)return'';
        return <div className='wanderSlide'>
            <Carousel>
                {slideData.map((item,index)=>{
                    let {pic,desc}=item;
                    return <div key={index}><img src={pic} alt={desc}/></div>
                })}
            </Carousel>
        </div>
    }
}

export default connect()(Slide);