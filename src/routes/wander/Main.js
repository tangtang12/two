import React from 'react';
import {connect} from 'react-redux';
import queryData from '../../api/wander';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    async componentDidMount(){
        let res = await queryData('SHOW_IMG');
        if (res.code===0){
            this.setState({
                data:res.data
            })
        }
    }

    render() {
        let {data}=this.state;
        if (data.length===0)return'';
        return <div className='main'>
            {data.map((item,index)=>{
                let {pic,title,desc,show,type}=item;
                return <div key={index} className='blockBox'>
                    {title? <div className='big-title'>
                        <h3>{title} <a href="javascript:;">MORE&gt;</a></h3>
                    </div>:''}

                    <div className='fz'>
                        <img src={pic instanceof Array?pic[0]:pic} alt=""/>
                        <p>{desc}</p>
                        {type? <p>{type}</p>:''}
                    </div>
                </div>
            })}
        </div>
    }
}

export default connect()(Main);