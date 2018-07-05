import React from 'react';
import {connect} from 'react-redux';
import queryData from '../../api/wander';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideData: []
        }
    }

    async componentDidMount(){
        let res = await queryData('SWIPER_SLIDE');
        if (res.code===0){
            this.setState({
                slideData:res.data
            })
        }
    }

    render() {
        if (this.state.slideData.length===0)return'';
       return <div className='tab'>
           <ul className='certify'>
               {this.state.slideData.map((item,index)=>{
                   let {pic,desc}=item;
                   return <li key={index}>
                       <img src={pic} alt={desc}/>
                       <span>{desc}</span>
                   </li>
               })}
           </ul>
       </div>
    }
}

export default connect()(Slide);