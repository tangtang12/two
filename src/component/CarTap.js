import React from 'react';
import {
    connect
} from 'react-redux';
import {
    Radio,
    message
} from "antd";
import Box from './Box';
import {
    addCar
} from "../api/car";
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

message.config({
    top: 250,
    duration: 1
});


class CarTap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            visible: false,
            car: false,
            color: null,
            size: null
        };
    }

    render() {
        let {
            pic,
            price,
            id,
            type
        } = this.props.data;
        return <div className='fix'>
            <div className='shopping'>
                <div className='shopTop'>
                    <div className='shopImg'>
                        <img src={pic} alt=""/>
                    </div>
                    <div className='shopFz'>
                        <p>￥{price.toFixed(2)}</p>
                        <p>{this.state.color||this.state.size?"已选：":'请选择颜色、尺码'}{this.state.color?this.state.color:''}{this.state.size&&this.state.color?`、`:""}{this.state.size?this.state.size:""}</p>
                    </div>
                    <a href='javascript:;' className='click' onClick={this.exit}>x</a>
                </div>
                <div className='title'>
                    <div className='small'><span className='name'>颜色</span><RadioGroup defaultValue={this.state.color?this.state.color:""}
                                                                                       onChange={this.changeColor}>
                        <RadioButton value="白色">白色</RadioButton>
                        <RadioButton value="黑色">黑色</RadioButton>
                        <RadioButton value="灰色">灰色</RadioButton>
                    </RadioGroup></div>
                    <div className='small'><span className='name'>尺码</span>
                        <RadioGroup defaultValue={this.state.size?this.state.size:""} onChange={this.changeSize}>
                            <RadioButton value="X">X</RadioButton>
                            <RadioButton value="XLL">XLL</RadioButton>
                            <RadioButton value="XLLL">XLLL</RadioButton>
                        </RadioGroup></div>
                    <div className='small'><span className='name'>数量</span>
                        <Box min='0' max='10' getNum={this.getNum} />
                    </div>
                </div>
                {type?<div className='bottom'>
                    <a href="javascript:;">立即购买</a>
                    <a href="javascript:;" onClick={this.addToCar.bind(this, id)}>加入购物车</a>
                </div>:""}
                <div className='btn-wrap'>
                    <a href="javascript:;">确认</a>
                </div>
            </div>
        </div>
    }

    getNum = (num) => {
        this.setState({
            num
        })
    };

    addToCar = async id => {
        if (!this.state.color || !this.state.size) {
            message.config({
                top: 300,
                duration: 1,
                getContainer: () => document.querySelectorAll('.shopping')[0]
            });
            message.success('请选择样式和尺寸');
            return;
        }
        let num = document.querySelectorAll('.numBox')[0].value;
        let res = await addCar({
            id,
            num,
            color: this.state.color,
            size: this.state.size
        });
        if (res.code === 0) {
            message.config({
                top: 250,
                duration: 1,
                getContainer: () => document.body
            });
            message.success('成功加入购物车');
            this.props.data.open();
            document.documentElement.style.overflow = '';
        }
    };

    exit = ev => {
        this.props.data.open();
        document.documentElement.style.overflow = '';
    };

    changeColor = (e) => {
        this.setState({
            color: e.target.value
        });
    };
    changeSize = (e) => {
        this.setState({
            size: e.target.value
        });
    }
}

export default connect()(CarTap);