import React, {Component} from 'react';

export default class Guess extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (<div className='guess'>
            <div className="toper" style={{color: 'black', fontSize: '.26rem',borderBottom:'.02rem solid #e0e0e0',}}>
                   <span style={{
                       marginLeft: '.5rem',
                       borderLeft: '.05rem solid',
                       paddingLeft: '.3rem'
                   }}>为你优选</span>
            </div>


            <div>
                <img src="#" alt=""/>
                <p>{}</p>
                <span>￥899</span>
                <a href="#">...</a>
            </div>
        </div>)
    }
}